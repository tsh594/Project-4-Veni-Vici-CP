# Web Development Project 4 - ArtExplorer

Submitted by: **Tasneem Shabana**

This web app allows users to discover random artworks from the Harvard Art Museums collection, with the ability to filter out unwanted artworks by banning specific attributes like artist, culture, or medium. It features a comprehensive history system showing both recent and all viewed artworks.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Displays consistent attributes (title, artist, culture, period, medium, etc.) for each artwork
  - Shows artwork image along with detailed information
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Single artwork displayed at a time
  - All attributes match the displayed image
  - Fallback display for missing images
- [x] **API call response results should appear random to the user**
  - Uses random sorting from Harvard Art Museums API
  - Large collection makes repeats unlikely
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Multiple attributes are clickable (artist, culture, period, etc.)
  - Immediate addition/removal from ban list
  - Visual feedback for banned attributes
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Comprehensive checking across all artwork attributes
  - Up to 10 attempts to find non-banned artwork
  - Clear visual indication of banned status

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
  - 6 different attribute types can be banned
- [x] Users can see a stored history of their previously displayed results from this session
  - Dual history system (recent + full history)
  - Preserves all viewed artworks
  - Clear visual indication of banned items in history

The following **additional** features are implemented:

* Glassmorphism UI design with modern aesthetics
* Loading animations during API requests
* Responsive design that works on all device sizes
* Comprehensive error handling for missing data
* Visual distinction between recent and full history
* Artwork count in history header
* "BANNED" overlay for filtered items in history

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./videos/Vite+React--Mobile.gif' title='Mobile Video app Walkthrough' width='400' alt='Video Walkthrough' />

<img src='./videos/Vite+React--Desktop.gif' title='Desktop Video app Walkthrough' width='400' alt='Video Walkthrough' />


GIF created with:
(1). Xbox Game Bar
(2). https://cloudconvert.com/mp4-converter
(3). https://www.xconvert.com/compress-gif

#Other future tools:GIF will be created with [ScreenToGif](https://www.screentogif.com/)#

## Notes

Challenges encountered while building the app:

1. **API Data Consistency**: The Harvard Art Museums API sometimes returns incomplete records or missing images, requiring robust null checks and fallback displays (robust error handling).

2. **Banned Items Logic**: Implementing comprehensive filtering across multiple attributes while maintaining performance required careful optimization of the checking algorithm.

3. **History Management**: Creating the dual history system (recent + full) while maintaining banned item visibility and proper scrolling behavior was complex but rewarding.

4. **Responsive Design**: Adapting the glassmorphism design to work well on mobile devices while maintaining the aesthetic required multiple iterations.

5. **State Management**: Keeping the history, banned terms, and current artwork in sync while ensuring smooth UI updates required careful state management.

## License

    Copyright 2025 Tasneem Shabana

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.