function greetings(names, jobInfo) {
  let fullName = names.join(' ');
  
  console.log(`Hello, ${fullName}! Nice to have a ${jobInfo.title} ${jobInfo.occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
