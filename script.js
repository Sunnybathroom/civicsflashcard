// Define your flashcards
const flashcards = [
   { question: "What is the supreme law of the land?", answer: "The Constitution" },
   { question: "What does the Constitution do?", answer: "Sets up the government; defines the government; protects basic rights of Americans" },
   { question: "Name two national U.S. holidays.", answer: "New Year’s Day; Martin Luther King, Jr. Day; Presidents Day; Memorial Day; Independence Day; Labor Day; Columbus Day; Veterans Day; Thanksgiving; Christmas" },
   { question: "What is an amendment?", answer: "A change to the Constitution; an addition to the Constitution" },
   { question: "What do we call the first ten amendments to the Constitution?", answer: "The Bill of Rights" },
   { question: "What is one right or freedom from the First Amendment?", answer: "Speech; religion; assembly; press; petition the government" },
   { question: "How many amendments does the Constitution have?", answer: "Twenty-seven (27)" },
   { question: "What did the Declaration of Independence do?", answer: "Announced our independence (from Great Britain); declared our independence (from Great Britain); said that the United States is free (from Great Britain)" },
   { question: "What are two rights in the Declaration of Independence?", answer: "Life; liberty; pursuit of happiness" },
   { question: "What is freedom of religion?", answer: "You can practice any religion, or not practice a religion." },
   { question: "What is the economic system in the United States?", answer: "Capitalist economy; market economy" },
   { question: "What is the “rule of law”?", answer: "Everyone must follow the law; Leaders must obey the law; Government must obey the law; No one is above the law" },
   { question: "Name one branch or part of the government.", answer: "Congress; legislative; President; executive; the courts; judicial" },
   { question: "What stops one branch of government from becoming too powerful?", answer: "Checks and balances; separation of powers" },
   { question: "Who is in charge of the executive branch?", answer: "The President" },
   { question: "Who makes federal laws?", answer: "Congress; Senate and House (of Representatives); (U.S. or national) legislature" },
   { question: "What are the two parts of the U.S. Congress?", answer: "The Senate and House (of Representatives)" },
   { question: "How many U.S. Senators are there?", answer: "One hundred (100)" },
   { question: "We elect a U.S. Senator for how many years?", answer: "Six (6)" },
   { question: "Who is one of your state’s U.S. Senators now?", answer: "Answers will vary. [Residents of the District of Columbia and U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]" },
   { question: "The House of Representatives has how many voting members?", answer: "Four hundred thirty-five (435)" },
   { question: "We elect a U.S. Representative for how many years?", answer: "Two (2)" },
   { question: "Name your U.S. Representative.", answer: "Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.]" },
   { question: "Who does a U.S. Senator represent?", answer: "All people of the state" },
   { question: "Why do some states have more Representatives than other states?", answer: "Because of the state’s population; because they have more people; because some states have more people" },
   { question: "We elect a President for how many years?", answer: "Four (4)" },
   { question: "In what month do we vote for President?", answer: "November" },
   { question: "What is the name of the President of the United States now?", answer: "Visit uscis.gov/citizenship/testupdates for the name of the current President of the United States." },
   { question: "What is the name of the Vice President of the United States now?", answer: "Visit uscis.gov/citizenship/testupdates for the name of the current Vice President of the United States." },
   { question: "If the President can no longer serve, who becomes President?", answer: "The Vice President" },
   { question: "If both the President and the Vice President can no longer serve, who becomes President?", answer: "The Speaker of the House" },
   { question: "Who is the Commander in Chief of the military?", answer: "The President" },
   { question: "Who signs bills to become laws?", answer: "The President" },
   { question: "Who vetoes bills?", answer: "The President" },
   { question: "What does the President’s Cabinet do?", answer: "Advises the President" },
   { question: "What are two Cabinet-level positions?", answer: "Secretary of Agriculture; Secretary of Commerce; Secretary of Defense; Secretary of Education; Secretary of Energy; Secretary of Health and Human Services; Secretary of Homeland Security; Secretary of Housing and Urban Development; Secretary of the Interior; Secretary of Labor; Secretary of State; Secretary of Transportation; Secretary of the Treasury; Secretary of Veterans Affairs; Attorney General; Vice President" },
   { question: "What does the judicial branch do?", answer: "Reviews laws; explains laws; resolves disputes (disagreements); decides if a law goes against the Constitution" },
   { question: "What is the highest court in the United States?", answer: "The Supreme Court" },
   { question: "How many justices are on the Supreme Court?", answer: "Visit uscis.gov/citizenship/testupdates for the number of current Supreme Court justices." },
   { question: "Who is the Chief Justice of the United States now?", answer: "Visit uscis.gov/citizenship/testupdates for the name of the current Chief Justice of the United States." },
   { question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", answer: "To print money; to declare war; to create an army; to make treaties" },
   { question: "Under our Constitution, some powers belong to the states. What is one power of the states?", answer: "Provide schooling and education; provide protection (police); provide safety (fire departments); give a driver’s license; approve zoning and land use" },
   { question: "Who is the Governor of your state now?", answer: "Answers will vary. [Residents of the District of Columbia and U.S. territories should answer that D.C. (or the territory where the applicant lives) does not have a Governor.]" },
   { question: "What is the capital of your state?", answer: "Answers will vary. [Residents of the District of Columbia should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]" },
   { question: "What are the two major political parties in the United States?", answer: "Democratic and Republican" },
   { question: "What is the political party of the President now?", answer: "Visit uscis.gov/citizenship/testupdates for the political party of the current President." },
   { question: "What is the name of the Speaker of the House of Representatives now?", answer: "Visit uscis.gov/citizenship/testupdates for the name of the current Speaker of the House of Representatives." },
   { question: "There are four amendments to the Constitution about who can vote. Describe one of them.", answer: "Citizens eighteen (18) and older can vote.; You don’t have to pay a poll tax to vote.; Any citizen can vote. (Women and men can vote.); A male citizen of any race (can vote)." },
   { question: "What is one responsibility that is only for United States citizens?", answer: "Serve on a jury; vote in a federal election" },
   { question: "Name one right only for United States citizens.", answer: "Vote in a federal election; run for federal office" },
   { question: "What are two rights of everyone living in the United States?", answer: "Freedom of expression; freedom of speech; freedom of assembly; freedom to petition the government; freedom of religion; the right to bear arms" },
   { question: "What do we show loyalty to when we say the Pledge of Allegiance?", answer: "The United States; the flag" },
   { question: "What is one promise you make when you become a United States citizen?", answer: "Give up loyalty to other countries; defend the Constitution and laws of the United States; obey the laws of the United States; serve in the U.S. military (if needed); serve (do important work for) the nation (if needed); be loyal to the United States" },
   { question: "How old do citizens have to be to vote for President?", answer: "Eighteen (18) and older" },
   { question: "What are two ways that Americans can participate in their democracy?", answer: "Vote; join a political party; help with a campaign; join a civic group; join a community group; give an elected official your opinion on an issue; call Senators and Representatives; publicly support or oppose an issue or policy; run for office; write to a newspaper" },
   { question: "When is the last day you can send in federal income tax forms?", answer: "April 15" },
   { question: "When must all men register for the Selective Service?", answer: "At age eighteen (18); between eighteen (18) and twenty-six (26)" },
   { question: "What is one reason colonists came to America?", answer: "Freedom; political liberty; religious freedom; economic opportunity; practice their religion; escape persecution" },
   { question: "Who lived in America before the Europeans arrived?", answer: "American Indians; Native Americans" },
   { question: "What group of people was taken to America and sold as slaves?", answer: "Africans; people from Africa" },
   { question: "Why did the colonists fight the British?", answer: "Because of high taxes (taxation without representation); because the British army stayed in their houses (boarding, quartering); because they didn’t have self-government" },
   { question: "Who wrote the Declaration of Independence?", answer: "Thomas Jefferson" },
   { question: "When was the Declaration of Independence adopted?", answer: "July 4, 1776" },
   { question: "There were 13 original states. Name three.", answer: "New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia" },
   { question: "What happened at the Constitutional Convention?", answer: "The Constitution was written; The Founding Fathers wrote the Constitution." },
   { question: "When was the Constitution written?", answer: "1787" },
   { question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", answer: "James Madison; Alexander Hamilton; John Jay; Publius" },
   { question: "What is one thing Benjamin Franklin is famous for?", answer: "U.S. diplomat; oldest member of the Constitutional Convention; first Postmaster General of the United States; writer of “Poor Richard’s Almanack”; started the first free libraries" },
   { question: "Who is the “Father of Our Country”?", answer: "George Washington" },
   { question: "Who was the first President?", answer: "George Washington" },
   { question: "What territory did the United States buy from France in 1803?", answer: "The Louisiana Territory; Louisiana" },
   { question: "Name one war fought by the United States in the 1800s.", answer: "War of 1812; Mexican-American War; Civil War; Spanish-American War" },
   { question: "Name the U.S. war between the North and the South.", answer: "The Civil War; the War between the States" },
   { question: "Name one problem that led to the Civil War.", answer: "Slavery; economic reasons; states’ rights" },
   { question: "What was one important thing that Abraham Lincoln did?", answer: "Freed the slaves (Emancipation Proclamation); saved (or preserved) the Union; led the United States during the Civil War" },
   { question: "What did the Emancipation Proclamation do?", answer: "Freed the slaves; freed slaves in the Confederacy; freed slaves in the Confederate states; freed slaves in most Southern states" },
   { question: "What did Susan B. Anthony do?", answer: "Fought for women’s rights; fought for civil rights" },
   { question: "Name one war fought by the United States in the 1900s.", answer: "World War I; World War II; Korean War; Vietnam War; (Persian) Gulf War" },
   { question: "Who was President during World War I?", answer: "Woodrow Wilson" },
   { question: "Who was President during the Great Depression and World War II?", answer: "Franklin Roosevelt" },
   { question: "Who did the United States fight in World War II?", answer: "Japan, Germany, and Italy" },
   { question: "Before he was President, Eisenhower was a general. What war was he in?", answer: "World War II" },
   { question: "During the Cold War, what was the main concern of the United States?", answer: "Communism" },
   { question: "What movement tried to end racial discrimination?", answer: "Civil rights (movement)" },
   { question: "What did Martin Luther King, Jr. do?", answer: "Fought for civil rights; worked for equality for all Americans" },
   { question: "What major event happened on September 11, 2001, in the United States?", answer: "Terrorists attacked the United States." },
   { question: "Name one American Indian tribe in the United States.", answer: "[For a complete list of federally recognized tribes, visit fns.usda.gov/snap/tribal-directory.] Cherokee; Navajo; Sioux; Chippewa; Choctaw; Pueblo; Apache; Iroquois; Creek; Blackfeet; Seminole; Cheyenne; Arawak; Shawnee; Mohegan; Huron; Oneida; Lakota; Crow; Teton; Hopi; Inuit" },
   { question: "Name one of the longest rivers in the United States.", answer: "Missouri River; Mississippi River" },
   { question: "What ocean is on the West Coast of the United States?", answer: "Pacific Ocean" },
   { question: "What ocean is on the East Coast of the United States?", answer: "Atlantic Ocean" },
   { question: "Name one U.S. territory.", answer: "Puerto Rico; U.S. Virgin Islands; American Samoa; Northern Mariana Islands; Guam" },
   { question: "Name one state that borders Canada.", answer: "Maine; New Hampshire; Vermont; New York; Pennsylvania; Ohio; Michigan; Minnesota; North Dakota; Montana; Idaho; Washington; Alaska" },
   { question: "Name one state that borders Mexico.", answer: "California; Arizona; New Mexico; Texas" },
   { question: "What is the capital of the United States?", answer: "Washington, D.C." },
   { question: "Where is the Statue of Liberty?", answer: "New York (Harbor); Liberty Island. [Also acceptable are New Jersey, near New York City, and on the Hudson River.]" },
   { question: "Why does the flag have 13 stripes?", answer: "Because there were 13 original colonies; because the stripes represent the original colonies" },
   { question: "Why does the flag have 50 stars?", answer: "Because there is one star for each state; because each star represents a state; because there are 50 states" },
   { question: "What is the name of the national anthem?", answer: "The Star-Spangled Banner" }
   { question: "The idea of self-government is in the first three words of the Constitution. What are these words?", answer: "We the people" }
   { question: "When do we celebrate Independence Day?", answer: "July 4" }
];

let quizStartTime = 0;
let cardDisplayTime = 0; // To track time spent on each flashcard
let totalQuizTime = 0; // Accumulate time spent in the quiz
let reviewStartTime = 0; // For GA4 to review session tracking

let shuffledCards = [];
let currentIndex = 0;
let wrongCards = []; // Stores the actual flashcard objects
let quizMode = 'all'; // Can be 'all' or 'wrongOnly'
let currentCard = null; // This will hold the flashcard object currently displayed

// Get references to HTML elements
const flashcardTextEl = document.getElementById('flashcard-text');
const flashcardAnswerEl = document.getElementById('flashcard-answer');
const nextButton = document.querySelector('button[onclick="showNextCard()"]');
const revealButton = document.querySelector('button[onclick="revealAnswer()"]');
const markWrongButton = document.querySelector('button[onclick="markAsWrong()"]');
const messageDisplayEl = document.getElementById('message-display');

// Get references to progress bar elements
const progressBarFillEl = document.getElementById('progress-bar-fill');
const progressTextEl = document.getElementById('progress-text');


// --- Helper function to display messages instead of alert() ---
function displayMessage(message, type = 'info') {
    if (messageDisplayEl) {
        messageDisplayEl.textContent = message;
        messageDisplayEl.className = `message ${type}`; // Add a class for styling (e.g., 'info', 'success', 'error')
        // NEW: Use visibility and opacity for smooth fade and to keep space
        messageDisplayEl.style.visibility = 'visible';
        messageDisplayEl.style.opacity = '1';

        // Optionally hide after a few seconds with fade out
        setTimeout(() => {
            messageDisplayEl.style.opacity = '0';
            // After fade out, hide completely so it doesn't interfere with potential clicks
            setTimeout(() => {
                messageDisplayEl.style.visibility = 'hidden';
                messageDisplayEl.textContent = ''; // Clear text after hidden
            }, 500); // This should match the CSS transition duration for opacity
        }, 3000); // Message visible for 3 seconds before fading out
    } else {
        console.warn('Message display element not found. Please add <div id="message-display"></div> to your HTML.');
    }
}

// --- LocalStorage Functions ---
const LOCAL_STORAGE_KEY = 'civicsQuizWrongQuestions';

// Function to save wrong cards to localStorage
function saveWrongCards() {
    // localStorage only stores strings, so convert your array of objects to a JSON string
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wrongCards));
    console.log('Wrong questions saved locally.');
}

// Function to load wrong cards from localStorage
function loadWrongCards() {
    const storedQuestions = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedQuestions) {
        // Convert the JSON string back to an array of objects
        try {
            const parsedQuestions = JSON.parse(storedQuestions);
            // Basic validation: ensure it's an array and contains objects with 'question' property
            if (Array.isArray(parsedQuestions) && parsedQuestions.every(q => typeof q === 'object' && q !== null && 'question' in q)) {
                wrongCards = parsedQuestions;
                console.log('Loaded previously marked wrong questions:', wrongCards);
                return true; // Indicate success
            } else {
                console.error('Invalid data found in localStorage for wrong questions. Clearing it.');
                localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear bad data
                return false;
            }
        } catch (e) {
            console.error('Error parsing wrong questions from localStorage:', e);
            localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear corrupted data
            return false;
        }
    }
    return false; // No stored questions found
}

// Fisher-Yates shuffle algorithm (kept this one as it correctly clones)
function shuffle(array) {
    // Create a shallow copy to avoid modifying the original array reference directly
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray; // Return the shuffled copy
}

// Function to update the progress bar
function updateProgressBar() {
    let totalQuestions = 0;
    if (quizMode === 'all') {
        totalQuestions = shuffledCards.length;
    } else if (quizMode === 'wrongOnly') {
        totalQuestions = wrongCards.length;
    }

    let progressPercentage = 0;
    if (totalQuestions > 0) {
        // Add 1 to currentIndex because it's 0-indexed for display purposes (e.g., 1 of 100, not 0 of 100)
        progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;
        // Ensure progress doesn't exceed 100% at the very end
        if (currentIndex >= totalQuestions) {
            progressPercentage = 100;
        }
    } else {
        // If totalQuestions is 0 (e.g., no wrong questions), show 0%
        progressPercentage = 0;
    }


    // Update the width of the fill bar
    if (progressBarFillEl) {
        progressBarFillEl.style.width = `${progressPercentage}%`;
    }
    // Update the percentage text
    if (progressTextEl) {
        progressTextEl.textContent = `${Math.round(progressPercentage)}%`;
    }
}


// Function to display a card
function displayCard() {
    let activeDeck = (quizMode === 'all') ? shuffledCards : wrongCards;

    // Handle end of quiz
    if (activeDeck.length === 0 || currentIndex >= activeDeck.length) {
        flashcardTextEl.textContent = "Well done! You've reached the end of the quiz! Click 'Start / Restart' to begin again.";
        flashcardAnswerEl.style.display = 'none';
        flashcardAnswerEl.textContent = ''; // Clear previous answer
        currentCard = null; // No card is currently displayed
        // Optionally disable buttons here
        nextButton.disabled = true;
        revealButton.disabled = true;
        markWrongButton.disabled = true;

        // Ensure progress bar shows 100% when quiz is completed
        if (progressBarFillEl) progressBarFillEl.style.width = '100%';
        if (progressTextEl) progressTextEl.textContent = '100% Complete!';

        // If it's the end of the 'wrong only' quiz, give a specific message
        if (quizMode === 'wrongOnly') {
            displayMessage("You've reviewed all marked questions!", 'success');
        } else {
            displayMessage("Quiz completed!", 'success');
        }
        // NEW: Clear any active messages after quiz completion
        clearMessage();
        return;
    }

    // Set the current card
    currentCard = activeDeck[currentIndex];
    flashcardTextEl.textContent = currentCard.question;
    flashcardAnswerEl.textContent = currentCard.answer;
    flashcardAnswerEl.style.display = 'none'; // Always hide answer when new question appears

    // Enable buttons if they were disabled
    nextButton.disabled = false;
    revealButton.disabled = false;
    markWrongButton.disabled = false;
    // NEW: Clear any active messages before displaying a new card
    clearMessage();

    // Update progress bar after displaying a new card
    updateProgressBar();

    // Track 'quiz_started' event
    gtag('event', 'flashcard_view', {
        'question_number': currentIndex + 1,
        'question_text': currentCard.question, // The question text itself
        'quiz_mode': quizMode, // 'all' or 'wrongOnly'
        'event_category': 'content_view'
    });
}

// NEW: Function to explicitly clear the message display
function clearMessage() {
    if (messageDisplayEl) {
        messageDisplayEl.style.opacity = '0';
        setTimeout(() => {
            messageDisplayEl.style.visibility = 'hidden';
            messageDisplayEl.textContent = '';
        }, 500); // Matches CSS transition duration
    }
}

function startQuiz() {
    // If the user was previously in review mode and starts a new quiz, end the review session.
    if (quizMode === 'wrongOnly' && reviewStartTime !== 0) {
        endReviewSession();
    }
    shuffledCards = shuffle(flashcards); // Use the new shuffle that returns a copy
    wrongCards = []; // Reset wrong cards when starting a new full quiz
    saveWrongCards(); // Clear wrong cards from localStorage too
    currentIndex = 0;
    quizMode = 'all';
    displayCard(); // Display the first card (which will call updateProgressBar)
    // Updated message to inform about clearing wrong questions
    displayMessage("Starting new quiz! Your previously marked questions have been cleared.", 'info');
}

function showNextCard() {
   // Calculate time spent on the current card before moving to the next
    const timeOnCard = (new Date().getTime() - cardDisplayTime) / 1000; // in seconds
    gtag('event', 'time_on_flashcard', {
        'question_number': currentIndex + 1, // Using currentIndex for the question number
        'time_seconds': timeOnCard,
        'quiz_mode': quizMode // Add parameter to distinguish between main quiz and review
    });
    cardDisplayTime = new Date().getTime(); // Reset timer for the next card as a new card will be displayed
    currentIndex++; // Advance to the next card
    if (quizMode === 'all') { // If currently in the main quiz mode
         if (currentIndex < shuffledCards.length) { // Check if there are more cards (Note: no -1 here as displayCard will handle the end state)
    displayCard(); // Display the card at the new index (which will call updateProgressBar)
    } else {
            // Main quiz completed
            endQuiz(); // Call the function to handle quiz completion and timing
            // Your existing `displayCard()` at the end will handle the "Well done!" message.
            // We just need to ensure the endQuiz() GA4 event fires.
        }
    } else if (quizMode === 'wrongOnly') { // If currently in the 'review wrong cards' mode
        if (currentIndex < wrongCards.length) { // Check if there are more wrong cards to review
            displayCard(); // Display the next wrong card
        } else {
            // User has gone through all wrong cards in this review session
            completeReviewOfAllWrongQuestions(); // Call the function for full wrong review completion
            // Your `displayCard()` will show "You've reviewed all marked questions!" already.
        }
    }
}

function revealAnswer() {
    if (currentCard) { // Only reveal if a card is currently active
        flashcardAnswerEl.style.display = 'block';
    }
}

function markAsWrong() {
    if (currentCard && !wrongCards.includes(currentCard)) {
        wrongCards.push(currentCard);
        saveWrongCards(); // Save to localStorage immediately after marking
        displayMessage("Question marked for review!", 'info');
        gtag('event', 'question_marked_wrong', {
            'question_text': currentCard.question, // The full question text
            'question_index_in_deck': currentIndex + 1, // Where they were when they marked it
            'quiz_mode': quizMode
        });// Use custom message
    } else if (!currentCard) {
        displayMessage("No card is currently displayed to mark as wrong.", 'error'); // Use custom message
    } else {
        displayMessage("This question is already marked for review.", 'info'); // Use custom message
    }
}

function startWrongOnlyQuiz() {
    if (wrongCards.length === 0) {
        displayMessage("You haven’t marked any questions for review yet!", 'info'); // Use custom message
        // Reset progress bar if no wrong questions to review
        if (progressBarFillEl) progressBarFillEl.style.width = '0%';
        if (progressTextEl) progressTextEl.textContent = '0%';
        // NEW: Clear any active messages
        clearMessage();
        return;
    }
    // If we're entering review mode, and maybe coming from a main quiz session,
    // ensure we log the start of the review and reset its timer.
    reviewStartTime = new Date().getTime(); // Initialize review session timer

    gtag('event', 'review_wrong_started', {
        'event_category': 'engagement',
        'event_label': 'User started reviewing wrong questions',
        'wrong_questions_count_at_start': wrongCards.length,
        'current_main_quiz_question_on_entry': (quizMode === 'all' && currentIndex < shuffledCards.length) ? currentIndex + 1 : 'N/A' // Context if switching from main quiz
    });

    quizMode = 'wrongOnly';
    currentIndex = 0;
    // Shuffle the wrongCards array directly as it's the active deck for this mode
    wrongCards = shuffle(wrongCards); // Shuffle the loaded/marked wrong cards
    displayCard(); // Display the first wrong card (which will call updateProgressBar)
    displayMessage(`Starting review of ${wrongCards.length} marked questions!`, 'info');
}

function endQuiz() {
    // Calculate total time in quiz
    const totalTimeInQuiz = (new Date().getTime() - quizStartTime) / 1000; // in seconds
    totalQuizTime = totalTimeInQuiz; // Store for later if needed (e.g., if you display it to the user)

    gtag('event', 'quiz_completed', {
        'total_quiz_time_seconds': totalTimeInQuiz,
        'event_category': 'engagement',
        'event_label': 'User completed the entire quiz'
    });
    // The visual "Well done!" message and button disabling is already handled by displayCard()
    // when currentIndex exceeds shuffledCards.length.
}

function completeReviewOfAllWrongQuestions() {
    // This function is called when the user reaches the end of the `wrongCards` array during review.
    gtag('event', 'review_wrong_completed_all', {
        'event_category': 'engagement',
        'event_label': 'User reviewed all marked wrong questions',
        'total_wrong_questions_reviewed': wrongCards.length // 'wrongCards.length' at the start of review session
    });
    // Also call endReviewSession() as this signifies an end to the review
    endReviewSession();
}

function endReviewSession() {
    if (reviewStartTime !== 0) { // Check if a review session was actually started
        const timeInReview = (new Date().getTime() - reviewStartTime) / 1000; // in seconds
        gtag('event', 'review_wrong_completed', {
            'time_in_review_seconds': timeInReview,
            'event_category': 'engagement',
            'event_label': 'User completed reviewing wrong questions (general end)'
        });
        reviewStartTime = 0; // Reset the timer
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Attempt to load wrong cards from localStorage
    const loaded = loadWrongCards();

    if (loaded && wrongCards.length > 0) {
        flashcardTextEl.textContent = `Welcome back! You have ${wrongCards.length} questions marked for review. Click 'Start / Restart' for a full quiz, or 'Review Marked Questions' to focus on those.`;
        displayMessage("Previous wrong questions loaded!", 'success');
    } else {
        flashcardTextEl.textContent = "Click 'Start / Restart' to begin the quiz!";
    }
    flashcardAnswerEl.style.display = 'none'; // Ensure answer is hidden on load
    // Disable buttons initially until a quiz starts
    nextButton.disabled = true;
    revealButton.disabled = true;
    markWrongButton.disabled = true;

    // Initialize progress bar on load
    updateProgressBar(); // This will set it to 0% initially
    // NEW: Ensure message display is initially hidden and takes up space
    clearMessage(); // Call clearMessage to set initial visibility/opacity
});
