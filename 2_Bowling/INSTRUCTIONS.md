# Instructions - Bowling Game

Make all changes in the `task.js` and the `spec/task.spec.js` file.

Write a program to score a game of Ten-Pin Bowling.

Input: string (described below) representing a bowling game

Output: integer score

### The scoring rules:
1. Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.

2. In each frame, the bowler gets up to two tries to knock down all ten pins.

3. If the first ball in a frame knocks down all ten pins, this is called a "strike". The frame is over. The score for the frame is ten plus the total of the pins knocked down in the next two balls.

4. If the second ball in a frame knocks down all ten pins, this is called a "spare". The frame is over. The score for the frame is ten plus the number of pins knocked down in the next ball.

5. If, after both balls, there is still at least one of the ten pins standing the score for that frame is simply the total number of pins knocked down in those two balls.

6. If you get a spare in the last (10th) frame you get one more bonus ball. If you get a strike in the last (10th) frame you get two more bonus balls.

7. These bonus throws are taken as part of the same turn. If a bonus ball knocks down all the pins, the process does not repeat. The bonus balls are only used to calculate the score of the final frame.

8. The game score is the total of all frame scores.

### Examples
* X indicates a strike
* */ indicates a spare
* *- indicates a miss
* *| indicates a frame boundary
* *The characters after the || indicate bonus balls

#### Example 1
X|X|X|X|X|X|X|X|X|X||XX -> Total score = 10 frames x 30 = 300

#### Example 2
9-|9-|9-|9-|9-|9-|9-|9-|9-|9-|| -> Total score = 10 frames x 9 = 90

#### Example 3
5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 -> Total score = 10 frames x 15 = 150

#### Example 4
X|7/|9-|X|-8|8/|-6|X|X|X||81 -> Total score = 167