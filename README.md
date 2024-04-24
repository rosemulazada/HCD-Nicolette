# HCD-Nicolette

My repository for the subject of Human Centred Design for the minor Web Design and Development 23-24, designing for Nicolette Besemer. For a more in-depth description of the process, please find my [Wiki.](https://github.com/rosemulazada/HCD-Nicolette/wiki)

## Table of Contents

-   [Introduction](#introduction-to-the-assignment)
    -   [About Nicolette Besemer](#about-nicolette-besemer);
-   [Installation](#installation)
-   [Usage and Features](#usage-and-features)
    -   [The four principles](#the-four-principles);
-   [Reflection](#Reflection)
-   [External Sources](#external-sources)

## Introduction

For this assignment, we're tasked with designing solely for _one_ person. Now, in any other scenario, this would sound like a nightmare - what about accessibility? But there's a catch: the person we design for has some kind of disability, be it that they are blind or have motor problems. We have to design specifically suited to them and their needs. The entire minor is split up into three teams, each team representing one person. Our person is **Nicolette Besemer,** and she's the person for who we have to make, ironically, an _exclusive_ design, as dubbed by teacher Vasilis van Gemert.

### About Nicolette Besemer

Nicolette Besemer is president at Onbeperkt West, among others, and has a passion for geochemistry: this she also graduated from Utrecht University in 1972 where she also taught. She has also taught migrants. She organizes a lot around accessibility for others in her neighborhood. She has also been a geologist by profession and enjoys visiting physical wonders, this comes from a passion for nature.

She has limited use of her limbs and relies on speech software and her drawing tablet to navigate the Web. This means she cannot use shortcuts, making certain actions difficult to perform, including cutting, pasting, selecting and generally navigating. **This is our design challenge for her.**

She has not always been limited, once she became neurologically ill and since then she has been using a wheelchair to get around. She was not always passionate about helping people with disabilities, because she found she had more important things to focus on than simply being disabled; but she describes herself as a people person to the core, so who is she not to help when people are in need? This is how she ended up getting involved in taking the first steps towards accessibility in the city, and she has achieved amazing things since then. If ever anything befell you and you were to end up in a wheelchair, you would surely be thankful to Nicolette; a pioneer in accessibility in Amsterdam, and Amsterdammer of the Year in 2016 as well as Knight of the Order of Orange-Nassau, as dubbed by the King of the Netherlands himself!

## Installation

Here are the steps to install my project.

1. Under the `Code` tab at the top.
2. Download this repository as a `.zip` file and unpack it.
3. Locate the folder `HCD-Nicolette`
    - If you have `VS Code`: From here, all you need to do is open the folder in your editor and use the `Live Server` extension to start a local host. This allows you to also view the code and work more hands-on, should you desire.
    - If not, you can find the document on your device, navigate to the `index.html` file (this should be visible just by opening up `HDC-Nicolette`), right-click it and open in a browser of your choosing. I've used Arc and Google Chrome to test this project, so I can recommend these two.
4. Navigate to the iteration of the project you want to view on the home page!

This project is also online: find the link at the top of this repository, under the description on the right! Or, for ease of access, [right here.](https://hcd-nicolette.vercel.app/)

## Usage and Features

-   Click on first word and last word to select those two words and all words between them.
-   Press the copy button to copy.
-   Press the paste button to paste.
-   Press the clear button to clear the text area.
-   You can paste as many things as you want to the text area and it will not overwrite anything until you clear the text yourself with the clear button.
-   Use the WhatsApp and Twitter buttons to share the text from the textarea! You can edit the textarea as well, and this will also get shared.
-   When you hover over a word, it gets bigger and gets a 'marked' styling. Your cursor also gets the 'copy' style.
-   Scroll inside the textarea using the up and down arrow buttons.
-   Optional WebShare button on browsers that support it for illustration purposes.

### The four principles

1. **Study situation**
   As you can read in my Wiki, I spent a lot of time not only studying her but also what other teammates thought and how she reacted to those things. Say there's something they implemented that I hadn't thought of, what does Nicolette think of it? Does she like it? If not, does it still pose a valuable idea if I can tweak it to be so?
2. **Ignore conventions**
   I guess that every project of every student inevitably has exclusive design. We're only designing for one person. That has to be ignoring conventions if I've ever seen it; of course we still stick to general guidelines but we mostly listen to the person as that is our priority!
3. **Prioritise identity**
   Of course I tried to put Nicolettes identity first as much as possible, it is for her after all, but it is inevitable that we also design for ourselves. The design I tried to keep sleek and as clear as possible, making sure to keep buttons that belong together close and give enough spacing to the other things. I chose a font that is easily legible for Nicolette's sake but also one that I liked. As for the text content, Nicolette expressed loving geology and so I also based my text off this - and of course, the entire factor that she wanted to share specific bits of text and share them with her grandson that loves geology too was something that I very much focused on and is of course crucially a part of her identity as well.
4. **Add nonsense**
   My first idea of nonsense was to make the font bigger on hover, and I guess if you want to consider me initially using the keyboard that counts too, but I do think it's mostly the text enlargement which she ended up saying she really liked. It of course ended up making it into the final versions after all! I really wanted to add effects like sparkles on succesful pasting or copying and such but this was not something I ended up doing as I did not want to overwhelm her.

## Reflection

### How did it go?

This was definitely an experience to keep with me forever. We're told to build accessible apps all the time but that doesn't mean we do it to the full extent, in fact despite our best efforts, even then, most of the time we realistically don't. There are so many things to keep in mind, every person with a disability is unique. I had the idea that I only now understand what accessibility means. And once again, realistically, I don't, and I probably never will to the full extent of those who experience it because again _there is just so much to it._ That doesn't mean I can't try my best to learn and be aware of as much as I possibly can and accomodate _as many people as I can._

### What did I struggle with most and what did I learn?

Making sure the selection system worked was a pain at first. I didn't understand creating a range very well, but I still managed to get it pretty early on - for the first intake I was able to get it functional, which was nice. What else was tough, though it didn't make it to the final prototype, was giving every selected word a certain style. I managed it but it took me a lot of time and playing with how to define that scope. I'm proud that I made it even though I didn't end up showing it to Nicolette (in favour of a better idea).

During the first week I tried to use a keypress as she had told us that she was sometimes okay with using a shortcut, although this was clearly a new concept to her that she didn't fully understand, she expressed to us that she was really open to try. I had thus used the 'K' key for copying. In hindsight this wasn't very smart of me, considering that even if she had told me that she was okay trying a key, it probably should not have been _that_ key.. The spacebar would have been a much better option, for example. It's nearer to her hands and quite large, harder to misclick. This idea came to me quite early on, but I still avoided it. I knew that I inevitably would have to add more than one or two buttons and this would mean it would soon expand itself to the full range of the keyboard. Besides, she found buttons quite nice, so that was what I continued with.

I learned that it was a good thing of me to try it out nonetheless. I saw how she reacted to it and she got to give it a shot despite being uncertain about whether it would work for her or not; that was very awesome to see, how driven and motivated she was, how curious! She always wanted to try something. I knew after this what to do instead of the keypress, and that was a good lesson and test, I think anyway.

Also.. the text enlargement is unfortunately not flawless.. if you select a word at the edge of the container it glitches out, meaning it can't really be selected. Which is unfortunate, but by the time I noticed it was the end of the second week and I have not been able to find a solution.. Thankfully Nicolette herself didn't run into this problem while testing.

### What am I proud of and what would I improve next time?

I'm proud of how enthusiastically she responded to all the iterations I made week after week. I would recap to her briefly what we had done last time, what she had found difficult, and how I fixed those things - she was really happy to see that I got to each point she described to me, and it really did something to me because it made me realise that for me this was such little work but for her it opened up a whole new world that was previously not accessible to her.

I would love next time to make a mobile iteration for her. It was not required for the assignment but it still sticks with me how badly she wanted to share with her grandson, and though I have that WhatsApp feature added, it really is only relevant to her on mobile as I doubt she shares things with her grandson on Twitter..

Overall I'm really glad I got an opportunity such as this, especially considering the fact we're basically the only students in the world studying this and busying ourselves with exclusive design. It's taught me such valuable lessons and granted me insights that I never would have otherwise gained.

## External Sources

-   [WebShare API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
-   [Twitter Share Button](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)
-   [Whatsapp Share Button](https://www.javatpoint.com/how-to-add-a-whatsapp-share-button-in-a-website-using-javascript)
-   [window.getSelection() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)
-   [Document.createRange()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange)
