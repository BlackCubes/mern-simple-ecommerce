import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, Image } from '../common';

import {
  ProductDetailsContainerStyled,
  ProductDetailsStyled,
  ProductDetailsHeaderStyled,
  ProductDetailsHeaderTitleStyled,
  ProductDetailsHeaderDataStyled,
  ProductDetailsBottomContainerStyled,
  ProductDetailsInfoStyled,
  ProductDetailsInfoImageStyled,
  ProductDetailsPriceShippingCartStyled,
  ProductDetailsPriceShippingCartRowStyled,
  ProductDetailsPriceStyled,
  ProductDetailsShippingBuyStyled,
  ProductDetailsShippingOptionStyled,
  ProductDetailsDescriptionStyled,
  ProductDetailsDescriptionHeaderStyled,
  ProductDetailsDescriptionBodyStyled,
  ProductDetailsReviewsStyled,
  ProductDetailsReviewsHeaderStyled,
  ProductDetailsReviewsBodyStyled,
  ProductDetailsReviewsAddStyled,
  ProductDetailsReviewContentStyled,
  ProductDetailsReviewListStyled,
  ProductDetailsReviewLeftColStyled,
  ProductDetailsReviewRightColStyled,
  ProductDetailsReviewRatingStyled,
  ProductDetailsReviewUserStyled,
  ProductDetailsReviewDescriptionStyled,
} from '../common/Pages';

import {
  HeadingQuaternary,
  HeadingSecondary,
  Paragraph,
  Small,
} from '../common/Typography';

import { Breadcrumbs, Modal, RatingsStatic, Snackbar } from '../Components';
import { CategorySidebar } from '../Components/Sidebar';

import { useAuthContext } from '../context';
import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';

import { daysFromNow, dateTimeFormat } from '../utils';

const reviewFormFields = [
  {
    type: 'text',
    name: 'fullname',
    id: 'fullname',
    placeholder: 'Full Name',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      margin: '0 0 1rem',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'textarea',
    name: 'review',
    id: 'review',
    placeholder: 'Make A Review',
    minlength: '20',
    maxlength: '280',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      margin: '0 0 1rem',
      padding: '0 0.75rem',
    },
  },
];

const adminVerifyFields = [
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
];

let newCrumbs = [];

const ProductDetailsPage = ({ FormContainerComponent }) => {
  const [reviewModalToggle, setReviewModalToggle] = useState(false);
  const [verifyModalToggle, setVerifyModalToggle] = useState(false);
  const [reviewId, setReviewId] = useState(0);
  const { id } = useParams();
  const { addProduct } = useCartContext();
  const {
    getProduct,
    product,
    reviews,
    getReviews,
    postReview,
    deleteReview,
    apiReviewErr,
  } = useProductContext();
  const { checkAuth } = useAuthContext();

  useEffect(() => {
    if (id) {
      getProduct(id);
      getReviews(id);
    }
  }, [id]);

  useEffect(() => {
    if (product)
      newCrumbs = [
        {
          name: `Category: ${product.category}`,
          path: `/products/category/${product.category}`,
        },
        {
          name: product.title,
          path: `/products/${product.id}`,
        },
      ];
  }, [product]);

  const onFormModal = (setToggle) => (e, chosenReviewId) => {
    e.preventDefault();
    setToggle((bool) => !bool);
    if (chosenReviewId) setReviewId(chosenReviewId);
  };

  const onSubmissionModal = (getFunction, setToggle) => (givenId) => (
    newValues
  ) => {
    getFunction(givenId, newValues);
    setToggle(false);
  };

  return (
    <>
      <Breadcrumbs newCrumbs={newCrumbs} />

      <ProductDetailsContainerStyled>
        <ProductDetailsStyled>
          {!product ? (
            <HeadingQuaternary>Loading...</HeadingQuaternary>
          ) : (
            <>
              <ProductDetailsHeaderStyled>
                <ProductDetailsHeaderTitleStyled>
                  <HeadingQuaternary>{product.title}</HeadingQuaternary>
                </ProductDetailsHeaderTitleStyled>

                <ProductDetailsHeaderDataStyled>
                  <Small tagType="strong">Type:</Small>
                  &nbsp;
                  <Small>{product.category}</Small>
                </ProductDetailsHeaderDataStyled>

                <ProductDetailsReviewRatingStyled>
                  <RatingsStatic
                    rating={
                      !reviews
                        ? 0
                        : !reviews.length
                        ? 0
                        : reviews[0].ratingsAverage
                    }
                    uniqueOffset={id}
                  />
                </ProductDetailsReviewRatingStyled>
              </ProductDetailsHeaderStyled>

              <ProductDetailsBottomContainerStyled>
                <ProductDetailsInfoStyled>
                  <ProductDetailsInfoImageStyled>
                    <Image rest={{ src: product.image, alt: product.title }} />
                  </ProductDetailsInfoImageStyled>
                </ProductDetailsInfoStyled>

                <ProductDetailsPriceShippingCartStyled>
                  <ProductDetailsPriceStyled>
                    <HeadingSecondary>
                      {`$${product.price.toFixed(2)}`}
                    </HeadingSecondary>
                  </ProductDetailsPriceStyled>

                  <ProductDetailsPriceShippingCartRowStyled>
                    <ProductDetailsShippingBuyStyled>
                      <Small tagType="strong" colorType="lime_green">
                        Get it in 3 days
                      </Small>
                    </ProductDetailsShippingBuyStyled>

                    <ProductDetailsShippingOptionStyled>
                      <Small tagType="strong">
                        {product.price >= 50
                          ? 'FREE Shipping:'
                          : '3-DAY Shipping:'}
                      </Small>
                      &nbsp;
                      <Small>
                        Get it by&nbsp;
                        {dateTimeFormat(
                          'en-US',
                          { weekday: 'short' },
                          daysFromNow(3)
                        )}
                      </Small>
                    </ProductDetailsShippingOptionStyled>
                  </ProductDetailsPriceShippingCartRowStyled>

                  <ProductDetailsPriceShippingCartRowStyled>
                    <div className="product-details__cart-add">
                      <Button
                        rest={{
                          type: 'button',
                          onClick: () => addProduct(product),
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </ProductDetailsPriceShippingCartRowStyled>
                </ProductDetailsPriceShippingCartStyled>
              </ProductDetailsBottomContainerStyled>

              <ProductDetailsDescriptionStyled>
                <ProductDetailsDescriptionHeaderStyled>
                  <HeadingQuaternary>Overview</HeadingQuaternary>
                </ProductDetailsDescriptionHeaderStyled>

                <ProductDetailsDescriptionBodyStyled>
                  <Paragraph>{product.description}</Paragraph>
                </ProductDetailsDescriptionBodyStyled>
              </ProductDetailsDescriptionStyled>

              <ProductDetailsReviewsStyled>
                <ProductDetailsReviewsHeaderStyled>
                  <HeadingQuaternary>Reviews</HeadingQuaternary>
                </ProductDetailsReviewsHeaderStyled>

                <ProductDetailsReviewsBodyStyled>
                  <ProductDetailsReviewsAddStyled>
                    <Button
                      rest={{
                        type: 'button',
                        onClick: (e) => onFormModal(setReviewModalToggle)(e),
                        colortype: 'transparent',
                        hovercolortype: 'moderate_blue_dark',
                        nonbtn: true,
                      }}
                    >
                      Add a review
                    </Button>
                  </ProductDetailsReviewsAddStyled>

                  <ProductDetailsReviewContentStyled>
                    {!reviews ? (
                      <Paragraph>No reviews</Paragraph>
                    ) : !reviews.length ? (
                      <Paragraph>No reviews</Paragraph>
                    ) : (
                      reviews.map((review) => (
                        <ProductDetailsReviewListStyled key={review._id}>
                          <ProductDetailsReviewLeftColStyled>
                            <ProductDetailsReviewRatingStyled>
                              <RatingsStatic rating={review.rating} />
                              {/* <Paragraph>{review.rating}</Paragraph> */}
                            </ProductDetailsReviewRatingStyled>

                            <ProductDetailsReviewUserStyled>
                              <Paragraph sizetype="small">
                                <span>
                                  by&nbsp;
                                  {review.userfullname}
                                  &nbsp;on&nbsp;
                                  {dateTimeFormat(
                                    'en-US',
                                    { dateStyle: 'medium' },
                                    new Date(review.createdAt)
                                  )}
                                </span>
                              </Paragraph>
                            </ProductDetailsReviewUserStyled>

                            <ProductDetailsReviewDescriptionStyled>
                              <Paragraph>{review.review}</Paragraph>
                            </ProductDetailsReviewDescriptionStyled>
                          </ProductDetailsReviewLeftColStyled>

                          {checkAuth() ? (
                            <ProductDetailsReviewRightColStyled>
                              <Button
                                rest={{
                                  type: 'button',
                                  onClick: (e) =>
                                    onFormModal(setVerifyModalToggle)(
                                      e,
                                      review._id
                                    ),
                                  colortype: 'transparent',
                                  hovercolortype: 'moderate_blue_dark',
                                  nonbtn: true,
                                }}
                              >
                                Delete Review
                              </Button>
                            </ProductDetailsReviewRightColStyled>
                          ) : null}
                        </ProductDetailsReviewListStyled>
                      ))
                    )}
                  </ProductDetailsReviewContentStyled>
                </ProductDetailsReviewsBodyStyled>
              </ProductDetailsReviewsStyled>

              <Modal
                header="Enter Review"
                modalToggle={reviewModalToggle}
                handleModal={onFormModal(setReviewModalToggle)}
              >
                <FormContainerComponent
                  onSubmit={onSubmissionModal(
                    postReview,
                    setReviewModalToggle
                  )(id)}
                  formFields={reviewFormFields}
                  hasReviewRating
                />
              </Modal>

              <Modal
                header="Verify Password"
                modalToggle={verifyModalToggle}
                handleModal={onFormModal(setVerifyModalToggle)}
              >
                <FormContainerComponent
                  onSubmit={onSubmissionModal(
                    deleteReview,
                    setVerifyModalToggle
                  )(reviewId)}
                  formFields={adminVerifyFields}
                />
              </Modal>

              {!apiReviewErr ? null : (
                <Snackbar color="red">{apiReviewErr}</Snackbar>
              )}
            </>
          )}
        </ProductDetailsStyled>

        <CategorySidebar />
      </ProductDetailsContainerStyled>
    </>
  );
};

ProductDetailsPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default ProductDetailsPage;
