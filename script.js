// ======================================================
// INFOMATE – RRCE CHATBOT
// Rule-Based Bilingual Chatbot (English + Kannada)
// ======================================================


// ---------- HELPER FUNCTIONS ----------

function containsAny(text, keywords) {
    return keywords.some(keyword => text.includes(keyword));
}

function containsKannada(text) {
    return /[\u0C80-\u0CFF]/.test(text);
}


// ---------- MAIN CHATBOT RESPONSE ----------

function infomateResponse(userInput) {

    let langElement = document.getElementById("language");
    let lang = langElement ? langElement.value : "en";

    userInput = userInput.trim().toLowerCase();

    // If user types Kannada, automatically reply in Kannada
    if (containsKannada(userInput)) {
        lang = "kn";
    }


    // ==================================================
    // GREETINGS
    // ==================================================

    if (
        userInput === "hi" ||
        userInput === "hello" ||
        userInput === "hey" ||
        userInput.includes("ನಮಸ್ಕಾರ") ||
        userInput.includes("ಹಲೋ")
    ) {

        return lang === "kn"
            ? "ನಮಸ್ಕಾರ 😊 ನಾನು INFOMATE. ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
            : "Hello 😊 I am INFOMATE. How can I help you?";

    }

    else if (
        userInput.includes("good morning") ||
        userInput.includes("ಶುಭೋದಯ")
    ) {

        return lang === "kn"
            ? "ಶುಭೋದಯ 🌞 ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
            : "Good morning 🌞 How can I help you today?";

    }

    else if (
        userInput.includes("good afternoon") ||
        userInput.includes("ಶುಭ ಮಧ್ಯಾಹ್ನ")
    ) {

        return lang === "kn"
            ? "ಶುಭ ಮಧ್ಯಾಹ್ನ 😊 ನಿಮಗೆ ಯಾವ ಮಾಹಿತಿ ಬೇಕು?"
            : "Good afternoon 😊 What information do you need?";

    }

    else if (
        userInput.includes("good evening") ||
        userInput.includes("ಶುಭ ಸಂಜೆ")
    ) {

        return lang === "kn"
            ? "ಶುಭ ಸಂಜೆ 🌆 ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
            : "Good evening 🌆 How can I help you?";

    }

    else if (
        userInput.includes("how are you") ||
        userInput.includes("ಹೇಗಿದ್ದೀರಿ") ||
        userInput.includes("ಹೇಗಿದ್ದೀಯ")
    ) {

        return lang === "kn"
            ? "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ 😄 ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧನಿದ್ದೇನೆ!"
            : "I'm doing great 😄 Always ready to help you!";

    }

    else if (
        userInput.includes("thank") ||
        userInput.includes("ಧನ್ಯವಾದ")
    ) {

        return lang === "kn"
            ? "ಸ್ವಾಗತ 😊 ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಂತೋಷ!"
            : "You're welcome 😊 Happy to help!";

    }

    else if (
        userInput.includes("bye") ||
        userInput.includes("ವಿದಾಯ")
    ) {

        return lang === "kn"
            ? "ವಿದಾಯ 👋 ಶುಭ ದಿನವಾಗಲಿ!"
            : "Goodbye 👋 Have a great day!";

    }


    // ==================================================
    // COURSES
    // ==================================================

    else if (
        containsAny(userInput, [
            "course",
            "courses",
            "branch",
            "ಕೋರ್ಸ್",
            "ಕೋರ್ಸ್‌ಗಳು",
            "ಶಾಖೆ",
            "ವಿಭಾಗ"
        ])
    ) {

        return lang === "kn"
            ? "RRCE ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಕೋರ್ಸ್‌ಗಳು:\nUG: CSE, AIML, ECE, ISE, ME, EEE, CIVIL, IoT, RA, CD\nPG: M.Tech, MBA"
            : "Courses offered at RRCE:\nUG: CSE, AIML, ECE, ISE, ME, EEE, CIVIL, IoT, RA, CD\nPG: M.Tech, MBA";

    }


    // ==================================================
    // FEES
    // ==================================================

    else if (
        containsAny(userInput, [
            "fee",
            "fees",
            "ಫೀಸ್",
            "ಶುಲ್ಕ"
        ])
    ) {

        // ---------- Specific course fees ----------

        if (/\bcse\b/i.test(userInput)) {

            return lang === "kn"
                ? "CSE ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,15,656"
                : "CSE annual course fee: ₹1,15,656";

        }

        else if (
            /\baiml\b/i.test(userInput) ||
            userInput.includes("ai ml")
        ) {

            return lang === "kn"
                ? "AIML ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,20,000"
                : "AIML annual course fee: ₹1,20,000";

        }

        else if (/\bece\b/i.test(userInput)) {

            return lang === "kn"
                ? "ECE ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,10,000"
                : "ECE annual course fee: ₹1,10,000";

        }

        else if (/\bise\b/i.test(userInput)) {

            return lang === "kn"
                ? "ISE ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,12,000"
                : "ISE annual course fee: ₹1,12,000";

        }

        else if (/\bme\b/i.test(userInput)) {

            return lang === "kn"
                ? "ME ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹95,000"
                : "ME annual course fee: ₹95,000";

        }

        else if (/\beee\b/i.test(userInput)) {

            return lang === "kn"
                ? "EEE ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,05,000"
                : "EEE annual course fee: ₹1,05,000";

        }

        else if (/\biot\b/i.test(userInput)) {

            return lang === "kn"
                ? "IoT ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,10,000"
                : "IoT annual course fee: ₹1,10,000";

        }

        else if (/\bra\b/i.test(userInput)) {

            return lang === "kn"
                ? "RA ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,18,000"
                : "RA annual course fee: ₹1,18,000";

        }

        else if (/\bcd\b/i.test(userInput)) {

            return lang === "kn"
                ? "CD ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹1,08,000"
                : "CD annual course fee: ₹1,08,000";

        }

        else if (/\bcivil\b/i.test(userInput)) {

            return lang === "kn"
                ? "CIVIL ಕೋರ್ಸ್‌ನ ವಾರ್ಷಿಕ ಫೀಸ್: ₹90,000"
                : "CIVIL annual course fee: ₹90,000";

        }


        // ---------- General fees ----------

        return lang === "kn"
            ? "ಫೀಸ್ ವಿವರಗಳು (ವಾರ್ಷಿಕ):\n\n" +
              "ಕೋರ್ಸ್ ಫೀಸ್:\n" +
              "CSE: ₹1,15,656\n" +
              "AIML: ₹1,20,000\n" +
              "ECE: ₹1,10,000\n" +
              "ISE: ₹1,12,000\n" +
              "ME: ₹95,000\n" +
              "EEE: ₹1,05,000\n" +
              "IoT: ₹1,10,000\n" +
              "RA: ₹1,18,000\n" +
              "CD: ₹1,08,000\n" +
              "CIVIL: ₹90,000\n\n" +
              "ಹಾಸ್ಟೆಲ್ ಫೀಸ್:\n" +
              "ಹುಡುಗರು: ₹90,000 – ₹1,05,000\n" +
              "ಹುಡುಗಿಯರು: ₹85,000 – ₹1,00,000"

            : "Fee Details (per year):\n\n" +
              "Course Fees:\n" +
              "CSE: ₹1,15,656\n" +
              "AIML: ₹1,20,000\n" +
              "ECE: ₹1,10,000\n" +
              "ISE: ₹1,12,000\n" +
              "ME: ₹95,000\n" +
              "EEE: ₹1,05,000\n" +
              "IoT: ₹1,10,000\n" +
              "RA: ₹1,18,000\n" +
              "CD: ₹1,08,000\n" +
              "CIVIL: ₹90,000\n\n" +
              "Hostel Fees:\n" +
              "Boys: ₹90,000 – ₹1,05,000\n" +
              "Girls: ₹85,000 – ₹1,00,000";

    }


    // ==================================================
    // HOSTEL
    // ==================================================

    else if (
        containsAny(userInput, [
            "hostel",
            "ಹಾಸ್ಟೆಲ್",
            "ವಸತಿ"
        ])
    ) {

        return lang === "kn"
            ? "ಹಾಸ್ಟೆಲ್ ಸೌಲಭ್ಯಗಳು:\nಪ್ರತ್ಯೇಕ ಹುಡುಗರ ಮತ್ತು ಹುಡುಗಿಯರ ಹಾಸ್ಟೆಲ್\n24/7 ಭದ್ರತೆ & CCTV\nವೈಫೈ, ಬಿಸಿ ನೀರು, ಓದು ಕೋಣೆ\nವೆಜ್ ಮತ್ತು ನಾನ್-ವೆಜ್ ಮೆಸ್"
            : "Hostel Facilities:\nSeparate boys & girls hostels\n24/7 security & CCTV\nWiFi, hot water, study rooms\nVeg & Non-veg mess";

    }


    // ==================================================
    // LIBRARY
    // ==================================================

    else if (
        containsAny(userInput, [
            "library",
            "books",
            "ಲೈಬ್ರರಿ",
            "ಗ್ರಂಥಾಲಯ",
            "ಪುಸ್ತಕ"
        ])
    ) {

        return lang === "kn"
            ? "ಗ್ರಂಥಾಲಯ ವಿವರಗಳು:\nRRCE ಕೇಂದ್ರ ಗ್ರಂಥಾಲಯದಲ್ಲಿ:\n• ತಾಂತ್ರಿಕ ಮತ್ತು ಸಾಮಾನ್ಯ ಪುಸ್ತಕಗಳು\n• ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ (e-books, e-journals)\n• ಓದುವ ಹಾಲ್ ಮತ್ತು Wi-Fi\n• ಪ್ರತ್ಯೇಕ ವಿಭಾಗಗಳ ಸಂಪನ್ಮೂಲಗಳು"
            : "Library Details:\nRRCE Central Library:\n• Technical and reference books\n• Digital library (e-books, e-journals)\n• Reading hall with Wi-Fi\n• Department-wise resources available";

    }


    // ==================================================
    // SPORTS
    // ==================================================

    else if (
        containsAny(userInput, [
            "sport",
            "sports",
            "ಕ್ರೀಡೆ",
            "ಕ್ರೀಡಾ"
        ])
    ) {

        return lang === "kn"
            ? "ಕ್ರೀಡಾ ಸೌಲಭ್ಯಗಳು:\nಕ್ರಿಕೆಟ್, ಫುಟ್ಬಾಲ್, ವಾಲಿಬಾಲ್, ಬಾಸ್ಕೆಟ್‌ಬಾಲ್\nಚೆಸ್ ಮತ್ತು ಕ್ಯಾರಂ\nವಾರ್ಷಿಕ ಕ್ರೀಡೋತ್ಸವ"
            : "Sports Facilities:\nCricket, Football, Volleyball, Basketball\nIndoor games: Chess & Carrom\nAnnual sports meet";

    }


    // ==================================================
    // ACADEMICS
    // ==================================================

    else if (
        containsAny(userInput, [
            "academic",
            "academics",
            "ಶೈಕ್ಷಣಿಕ",
            "ಪಠ್ಯಕ್ರಮ"
        ])
    ) {

        return lang === "kn"
            ? "ಶೈಕ್ಷಣಿಕ ವ್ಯವಸ್ಥೆ:\nಅನುಭವ ಹೊಂದಿದ ಅಧ್ಯಾಪಕರು\nVTU ಪಠ್ಯಕ್ರಮ\nಪ್ರತಿ ಸೆಮಿಸ್ಟರ್ 3 ಇಂಟರ್ನಲ್ ಪರೀಕ್ಷೆಗಳು"
            : "Academic System:\nExperienced faculty\nVTU syllabus\n3 internal assessments per semester";

    }


    // ==================================================
    // LABS
    // ==================================================

    else if (
        containsAny(userInput, [
            "lab",
            "laboratory",
            "ಲ್ಯಾಬ್",
            "ಪ್ರಯೋಗಾಲಯ"
        ])
    ) {

        return lang === "kn"
            ? "ಲ್ಯಾಬ್ ಸೌಲಭ್ಯಗಳು:\nಅತ್ಯಾಧುನಿಕ ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್‌ಗಳು\nಹೈ ಸ್ಪೀಡ್ ಇಂಟರ್ನೆಟ್\nವಿಭಾಗವಾರು ಲ್ಯಾಬ್‌ಗಳು"
            : "Laboratory Facilities:\nWell-equipped computer labs\nHigh-speed internet\nDepartment-specific labs";

    }


    // ==================================================
    // OTHER FACILITIES
    // ==================================================

    else if (
        containsAny(userInput, [
            "facility",
            "facilities",
            "ಸೌಲಭ್ಯ",
            "ಸೌಲಭ್ಯಗಳು"
        ])
    ) {

        return lang === "kn"
            ? "ಇತರೆ ಸೌಲಭ್ಯಗಳು:\nಕ್ಯಾಂಟೀನ್, ಆಡಿಟೋರಿಯಂ, ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ, ಲೈಬ್ರರಿ"
            : "Other Facilities:\nCanteen, Auditorium, Digital library, Library";

    }


    // ==================================================
    // TRANSPORT
    // ==================================================

    else if (
        containsAny(userInput, [
            "transport",
            "bus",
            "ಸಾರಿಗೆ",
            "ಬಸ್",
            "ಬಸ್ಸು"
        ])
    ) {

        return lang === "kn"
            ? "ಸಾರಿಗೆ ಸೌಲಭ್ಯಗಳು:\nಕಾಲೇಜು ಬಸ್‌ಗಳು ಲಭ್ಯ\nಬೆಂಗಳೂರು ಪ್ರಮುಖ ಪ್ರದೇಶಗಳಿಗೆ ಸಂಪರ್ಕ"
            : "Transport Facility:\nCollege buses available\nCovers major areas of Bengaluru";

    }


    // ==================================================
    // PLACEMENTS
    // ==================================================

    else if (
        containsAny(userInput, [
            "placement",
            "placements",
            "ಪ್ಲೇಸ್ಮೆಂಟ್",
            "ಉದ್ಯೋಗ"
        ])
    ) {

        return lang === "kn"
            ? "ಪ್ಲೇಸ್ಮೆಂಟ್ ವಿವರಗಳು:\n92% ಪ್ಲೇಸ್ಮೆಂಟ್ ಪ್ರಮಾಣ\nInfosys, TCS, Wipro ಮುಂತಾದ ಕಂಪನಿಗಳು\nಅಪ್ಟಿಟ್ಯೂಡ್ ಮತ್ತು ಸಾಫ್ಟ್ ಸ್ಕಿಲ್ಸ್ ತರಬೇತಿ"
            : "Placements at RRCE:\n92% placement rate\nCompanies: Infosys, TCS, Wipro, Accenture\nAptitude, soft skills & coding training";

    }


    // ==================================================
    // ANTI-RAGGING / SAFETY
    // ==================================================

    else if (
        containsAny(userInput, [
            "ragging",
            "safety",
            "discipline",
            "ರ್ಯಾಗಿಂಗ್",
            "ಭದ್ರತೆ",
            "ಶಿಸ್ತು",
            "ದೂರು"
        ])
    ) {

        return lang === "kn"
            ? "ಆಂಟಿ-ರ್ಯಾಗಿಂಗ್ ಕ್ರಮಗಳು:\nರ್ಯಾಗಿಂಗ್ ಸಂಪೂರ್ಣ ನಿಷೇಧ\nಆಂಟಿ-ರ್ಯಾಗಿಂಗ್ ಸಮಿತಿ\nCCTV ನಿಗಾವಹಣೆ\nದೂರು ಪರಿಹಾರ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಕೌನ್ಸೆಲಿಂಗ್"
            : "Anti-Ragging & Safety Measures:\nZero tolerance to ragging\nAnti-ragging committee\nCCTV surveillance\nGrievance redressal & counseling";

    }


    // ==================================================
    // DEFAULT RESPONSE
    // ==================================================

    else {

        return lang === "kn"
            ? "ಕೋರ್ಸ್, ಫೀಸ್, ಹಾಸ್ಟೆಲ್, ಪ್ಲೇಸ್ಮೆಂಟ್, ಕ್ರೀಡೆ ಅಥವಾ ಭದ್ರತೆ ಬಗ್ಗೆ ಕೇಳಬಹುದು 😊"
            : "You can ask about courses, fees, hostel, placements, sports, or safety 😊";

    }
}


// ======================================================
// SEND MESSAGE
// ======================================================

function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    let chatBox = document.getElementById("chat-box");


    // User message
    let userDiv = document.createElement("div");

    userDiv.className = "user";
    userDiv.innerText = message;

    chatBox.appendChild(userDiv);


    // Bot response
    let botDiv = document.createElement("div");

    botDiv.className = "bot";
    botDiv.innerText = infomateResponse(message);

    chatBox.appendChild(botDiv);


    // Clear input
    input.value = "";


    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


// ======================================================
// SUGGESTED QUESTIONS
// ======================================================

function askQuestion(question) {

    let input = document.getElementById("userInput");

    input.value = question;

    sendMessage();
}


// ======================================================
// ENTER KEY TO SEND
// ======================================================

document.addEventListener("DOMContentLoaded", function() {

    let input = document.getElementById("userInput");

    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();
        }

    });


    // ==================================================
    // AUTOMATIC WELCOME MESSAGE
    // ==================================================

    let chatBox = document.getElementById("chat-box");

    let botDiv = document.createElement("div");

    botDiv.className = "bot";

    botDiv.innerText =
        "Hello 👋 I'm INFOMATE, your RRCE College Information Assistant.\n" +
        "You can ask me about courses, fees, hostel, library, placements and more.";

    chatBox.appendChild(botDiv);

});