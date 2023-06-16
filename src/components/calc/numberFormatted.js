export const formattedNumber = number => {
  // Перевірка, чи номер вже має відповідний формат
  const isFormatted = /^\d{3}-\d{2}(-\d{2})+$/.test(number);

  if (isFormatted) {
    return number; 
  } else {
    // Видаляємо всі нецифрові символи з номера
    const digitsOnly = number.replace(/\D/g, '');

    let formattedNumber = digitsOnly.substring(0, 3) + '-';
    for (let i = 3; i < digitsOnly.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        formattedNumber += '-';
      }

      formattedNumber += digitsOnly[i];
    }
    return formattedNumber;
  }
};

// export const formattedNumber = number => {
//     let formattedNumber = number.substring(0, 3) + '-';
//     for (let i = 3; i < number.length; i += 1) {
//       if ((i - 3) % 2 === 0 && i !== 3) {
//         formattedNumber += '-';
//       }
//       formattedNumber += number[i];
//     }
//     return formattedNumber;
//   };