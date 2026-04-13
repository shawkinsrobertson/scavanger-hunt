# Scavenger Hunt

A mobile scavenger hunt app built in React Native for Android. Uses GPS and 
compass to guide a single user through a sequence of clue screens, each with 
distance-based clue progression, to a series of physical pickup locations.

Built as a personal project for a birthday surprise.

## Features

- GPS-based proximity detection with three distance states: far, getting 
  warmer, almost there
- Compass pointing toward current stop target
- Sequential stop flow: clue screen → arrival screen → next stop
- Fallback confirmation button for GPS inaccuracy edge cases
- Celebration screen with animation on final stop completion

## Stack

- React Native (Expo)
- [add location/compass libraries you're using here]

## Project Structure

```
scavenger-hunt/
├── app/
|   └──src/
|      └──assets/
|         └──components/   
│             ├── WelcomeScreen.tsx          # Welcome screen
│             ├── ClueScreen.tsx           # Clue screen with compass, distance, progressive clues
│             ├── PickupScreen.tsx       # Arrival/pickup confirmation screen
│             └── CelebrationScren.tsx    # Final screen with animated celebration balloons and game stats readout
|         └── data/
│             ├── hunt.ts          # configure custom stop coordinates, clue copy, and pickup instructions

```


## Stop Data

Stops are defined in `/data/hunt.ts`. Each stop contains:

- `coordinates` — latitude/longitude of the pickup location
- `clues` — array of three strings corresponding to far, warm, and close states
- `arrivalMessage` — instructions shown on the arrival screen

## Building

```bash
npm install
npx expo build:android
```

The release APK can be found under [Releases](../../releases).

## Known Issues / Notes

- GPS accuracy on consumer hardware varies; the confirmation button fallback 
  handles cases where the user is physically at the location but hasn't 
  triggered the proximity threshold
- Compass heading can lag on initial load; a short calibration moment on the 
  clue screen is recommended

## License

Personal use only.
