const subject = [
    'You have',
    'He has',
    'She has',
    'They have',
    'We have',
    'Your dog is',
    'My coffee is',
    'The computer is',
    'We are',
    'He is',
    'She is',
    'I am',
    'They are'
]

const number = Math.floor(Math.random() * 100)

const content = [
    'years old',
    'mothers',
    'crazy',
    'good looks',
    'wounds',
    'tables',
    'bathrooms',
    'dirty',
    'snow flakes',
    'days away',
    'boys',
    'children',
    'degrees hot'
]

const randomSubject = subject[Math.floor(Math.random() * subject.length)]

const randomContent = content[Math.floor(Math.random() * content.length)]

const randomMessage = randomSubject + ' ' + number + ' ' + randomContent + '.'

console.log(randomMessage + number)