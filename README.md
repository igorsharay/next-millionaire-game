#### Basic representation of the popular game "Who wants to be a millionaire?".

## Available Scripts

In the project directory, you can:

### `npm run dev`
Run the development server.\
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### `npm run prepare`
Runs once the husky preparation script.\
You will be able to see any lint errors on `git push`.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`
Manualy runs eslint check with automatic fixing if possible.


## Setting up game config

You can change the game config in `src/lib/game-config.json` file.

### Basic game settings

`prize` - Amount of money for the right asnwer.\
`prizeMultiplier` - Multiplier that applies on win amount of money.\
`questionsPerGame` - How many questions will be randomly selected for game.

### Add new questions
`questions` - You can add as many questions as you want. Questions will be picked randomlyfor each the game.\
`answers` - You can add any amount of answers. To proceed to the next level answers should contain at least one correct option `isCorrect`.

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
},
```

