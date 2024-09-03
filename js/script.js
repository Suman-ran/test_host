$(document).ready(function()
{
    $('.menu-toggle').on('click',function(){
     $('.nav').toggleClass('showing');

    });

});
$(document).ready(function() {
    let comments = [];

    // Handle comment form submission
    $('#comment-form').on('submit', function(e) {
        e.preventDefault();

        const commentText = $('#comment-text').val().trim();
        if (commentText === '') {
            alert('Please enter a comment');
            return;
        }

        const comment = {
            text: commentText,
            date: new Date().toLocaleString()
        };

        // Add the comment to the comments list
        addCommentToList(comment);

        // Clear the comment form
        $('#comment-text').val('');
    });

    function addCommentToList(comment) {
        comments.push(comment);
        $('#comments-list').append(
            `<div class="comment">
                <p>${comment.text}</p>
                <small>${comment.date}</small>
            </div>`
        );
    }
});
$(document).ready(function() {
    // Initialize like count
    let likeCount = 0;
    
    // Attach click event to like button
    $('#like-btn').click(function() {
        // Increment like count
        likeCount++;
        
        // Update like count display
        $('#like-count').text(likeCount);
    });
});
