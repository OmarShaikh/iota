# IOTA

IOT Sensor management system with real time data.

## Instructions to run

1. Run npm install in root folder
2. edit webpack.config.js file by adding below code snippet to oneOf: [ ]

### // Adds support for LESS

            {
              test: /\.less$/,
              use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'less-loader' }
              ]
          },

3. run the server
4. cd into iota folder
5. run npm install
6. run npx gulp less
7. run npm start
8. open http://localhost:3000 to view it in your browser.

## What optimisation technique can be used for performance optimisation?

- Using Redux for state management, so data does not have to be passed through components, hence reducing re-rendering

- Creating memoized selectors with Reselect to reduce re-rendering

- Throttling and Debouncing event actions to reduce re-rendering

- Dependency optimisation to reduce project size

- Using Web Workers for CPU extensive tasks

## What aspect of this exercise did you find most interesting?

I really enjoyed the assignment in its entirety. It allowed me to exercise both my creative and logical side.
However, i was particularly fascinated by the amount of real time data being transmitted from the server. I could imagine endless possibilities of exercising my creative side to visualise this data in meaningfull ways and my logical side to ensure that the application is snappy despite the vast amount of incoming data.

## What did you find most cumbersome?

I found the process of incorporating the data into my application rather tedious, Mainly because i did not implement a store for central state management, but there's nothing like the feeling of having something come together and just work! It was very fulfilling.

## Questions?

Please feel free to reach out to me if you have any questions or suggestions.
