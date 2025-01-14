const getBirthYears = (dob) => {
  const birthday = new Date(dob);

  const ageDifMs = Date.now() - birthday.getTime();

  const ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970) + " Years Old";
};

const yearsOld = getBirthYears("1991-04-01");

const yearsOldElement = (document.getElementById("yearsOldId").innerHTML = yearsOld);
