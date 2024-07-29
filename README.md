#### Basic representation of the popular game "Who wants to be a millionaire?".

The game can be played by this [link](https://next-millionaire-game.vercel.app).

## Available Scripts

In the project directory, you can:

### `npm run dev`
Run the development server.\
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### `npm run prepare`
Runs once the husky preparation script.\
Will automatically run eslint check on `git push` and unit-tests on `git commit`.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`
Manually runs eslint check with automatic fixing if possible.


## Setting up game config

The game config file can be found here `src/lib/game-config.json`.

### Basic game settings

`currency` - In which currency display reward. Available values `USD`, `EUR`.\
`reward` - Amount of money for the right answer for each level.

```
{
  levels": {
    "currency": "USD",
    "reward": [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]
  }
}
```

### Add new questions
`questions` - You can add as many questions as you want. Questions will be picked randomly for each game.\
`answers` - You can add any amount of answers. Answers should contain at least one correct option `isCorrect` to proceed to the next level.

Example:

```
{
  "questions": [
    {
      "text": "Which two words traditionally appear onscreen at the termination of a feature film",
      "answers": [
        {
          "text": "The End",
          "isCorrect": true
        },
        {
          "text": "The Conclusion",
          "isCorrect": false
        },
      ]
    },
  ]
}
```


## Game styles

Css variables can be found here `src/app/global.css`.

### Colors variables

```
--color-primary: #ff8b37;
--color-primary-light: #fff3eb;
--color-primary-dark: #e87928;
--color-text: #1c1c21;
--color-btn-text: #ffffff;
--color-btn: var(--color-primary);
--color-btn-active: var(--color-primary-dark);
--color-btn-hover: #ffac70;
--color-success: #47d867;
--color-success-light: #e6faea;
--color-error: #ec6259;
--color-error-light: #fdeeed;
--color-inactive: #d0d0d8;
--color-inactive-light: #f5f5f7;
--color-light: #ffffff;
```

### Animations variables

```
--correct-answer-animation: setCorrectAnswer 2s ease-out 0s forwards;
--wrong-answer-animation: setWrongAnswer 2s ease-out 0s forwards;
--answer-text-animation: fadeIn .35s ease-out 0s forwards;
--level-transition: background 0.5s ease-out, color 0.2s ease-out;
--question-animation: fadeIn .2s ease-out 0s forwards;
```

Correct answer & wrong answer have `2s` animation play.\
Each answer text has `350ms * [answer index]` delay to apear.\
Question text has `200ms` delay to apear.\
Level up has color and background transition delay for `200ms` and `500ms` accordingly.

## Other game settings

Click on the answer button has `delay = 1s` delay after answer animation finish before moving to the next question or ending the game.\
Answer text has maximum `maxAnswerLength = 60` symbols length and will be reduced to it.
