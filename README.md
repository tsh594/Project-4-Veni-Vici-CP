# Web Development Project 4 - ArtExplorer

Submitted by: **Tasneem Shabana**

This web app allows users to discover random artworks from the Harvard Art Museums collection, with the ability to filter out unwanted artworks by banning specific attributes like artist, culture, or medium.

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent across API calls (artist, culture, period, medium, etc.)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single artwork is displayed at a time 
  - Displayed attributes match the displayed image
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking the button generates random new artworks each time
  - The Harvard Art Museums API has a large collection making repeats unlikely
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Multiple attributes are clickable (artist, culture, period, etc.)
  - Clicking an attribute adds it to the ban list immediately
  - Clicking a banned attribute removes it immediately
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Artworks containing banned attributes won't appear in new searches
  - The app clearly shows when attributes are banned
  - Ban list items can be clicked to remove them

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed results from this session
  - A history panel shows the last 4 viewed artworks
  - History updates automatically with new discoveries
  - Banned items in history are visually marked

The following **additional** features are implemented:

* Visual indication of banned attributes with strikethrough and "BANNED" badge
* Loading animations during API requests
* Responsive design that works on mobile and desktop
* Glassmorphism UI design with modern aesthetics
* Error handling for missing images or data

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

1. **API Limitations**: The Harvard Art Museums API sometimes returns incomplete records or missing images, requiring robust error handling.

2. **Banned Items Logic**: Implementing comprehensive filtering across multiple attributes while maintaining performance required careful optimization.

3. **History Management**: Ensuring banned items were properly indicated in history without being filtered out was tricky but resulted in a better user experience.

4. **Responsive Design**: Creating a layout that worked well on both mobile and desktop while maintaining the aesthetic design required multiple iterations.

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