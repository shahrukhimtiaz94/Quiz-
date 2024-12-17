        // Quiz Questions
        const questions = [
            { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: "Hyper Text Markup Language" },
            { question: "Who is making the Web standards?", options: ["Mozilla", "Google", "The World Wide Web Consortium"], answer: "The World Wide Web Consortium" },
            { question: "Choose the correct HTML tag for the largest heading.", options: ["<h6>", "<h1>", "<head>"], answer: "<h1>" },
            // Repeat this for 30 questions...
        ];

        // Timer Logic
        let timeLeft = 600; // 10 minutes in seconds
        const timerElement = document.getElementById('time');

        const timerInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
                alert("Time's up! Submitting the quiz...");
                submitQuiz();
            }
        }, 1000);

        // Render Questions Dynamically
        const questionsContainer = document.getElementById('questions');
        questions.forEach((q, index) => {
            const questionHTML = `
                <div class="mb-3">
                    <p><strong>${index + 1}. ${q.question}</strong></p>
                    ${q.options.map(option => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q${index}" value="${option}" required>
                            <label class="form-check-label">${option}</label>
                        </div>
                    `).join('')}
                </div>
            `;
            questionsContainer.insertAdjacentHTML('beforeend', questionHTML);
        });

        // Quiz Submission Logic
        document.getElementById('quizForm').addEventListener('submit', function(e) {
            e.preventDefault();
            submitQuiz();
        });

        function submitQuiz() {
            clearInterval(timerInterval);
            const form = document.getElementById('quizForm');
            let correctCount = 0;

            questions.forEach((q, index) => {
                const selectedAnswer = form[`q${index}`].value;
                if (selectedAnswer === q.answer) {
                    correctCount++;
                }
            });

            // Calculate Result
            const totalQuestions = questions.length;
            const percentage = ((correctCount / totalQuestions) * 100).toFixed(2);
            let grade;
            if (percentage >= 90) grade = 'A';
            else if (percentage >= 75) grade = 'B';
            else if (percentage >= 50) grade = 'C';
            else grade = 'F';

            // Display Result
            document.getElementById('correctCount').textContent = correctCount;
            document.getElementById('percentage').textContent = `${percentage}%`;
            document.getElementById('grade').textContent = grade;

            document.querySelector('.quiz-container').classList.add('d-none');
            document.getElementById('result').classList.remove('d-none');
        }