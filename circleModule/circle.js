const circleArea = (r) => {
  const area = Math.PI * (r * r);
  console.log(`Yarıçapı ${r} olan dairenin alanı ${area}`)
};

const circleCircumference = (r) => {
  const circumference =  2 * Math.PI * r;
  console.log(`Yarıçapı ${r} olan dairenin çevresi ${circumference}`)
};

module.exports = {
  circleArea,
  circleCircumference,
};
