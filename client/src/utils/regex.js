export default {
  address: /^[A-Z0-9 ,#'/.]{3,96}$/iu,
  city: /^[a-zA-Z\u0080-\u024F]+(?:([ \-']|(\. ))[a-zA-Z\u0080-\u024F]+)*$/,
  name: /^[a-zA-Z]{2}(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
  state: /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/,
  zipcode: /^[0-9]{5}$/,
  rating: /^[1-5]{1}$/,
};
