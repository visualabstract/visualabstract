<script>
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            document.querySelector(`#${tabId}`).classList.add('active');

            document.querySelectorAll('.tabs button').forEach(btn => {
                btn.classList.remove('active');
            });

            event.target.classList.add('active');
        }

        function submitForm(tab) {
            alert('Form submitted successfully!');
            window.location.href = '#'; // Replace '#' with success page link.
        }
    </script>