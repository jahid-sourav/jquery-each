// Array =>
var cards = [
    {'image':'assets/images/01.jpg', 'title':'Card 01', 'text':'Stay informed about our mission start reading our blog today. Support our cause. Get Involved. Donate. Attend an Event. Give Today. Types: Donate, Start a Fundraiser, Events, Corporate Opportunities.'},
    {'image':'assets/images/02.jpg', 'title':'Card 02', 'text':'Go to Template > Edit HTML. Press CTRL F / CMD F and search for post-title entry-title. This will appear twice in your template, look for the second instance. Use the numbering on the side to help you.'},
    {'image':'assets/images/03.jpg', 'title':'Card 03', 'text':'This is usually seen as an image, but it is possible with a little bit of code. It’s a great way to make text stand out while maintaining a clean and simple style. This tutorial will show you how to add it to your post title '},
    {'image':'assets/images/04.jpg', 'title':'Card 04', 'text':'Josh Blue is an American comedian who with cerebral palsy. Read the success story of Josh Blue! View Our Programs. Browse Events. Donate Online. Highlights: Donation Option Available.'},
];

// Foreach =>
var col = '';
$.each(cards, function(index, value){
    col += '<div class="col">';
        col += '<div class="card">';
            col += '<img class="card-img-top" alt="Card Image" src="'+value.image+'">';
            col+= '<div class="card-body">';
                col+= '<h5 class="card-title">'+value.title+'</h5>';
                col+= '<p class="card-text">'+value.text+'</p>';
            col+= '</div>';
        col += '</div>';
    col += '</div>';
});
$('#cardContent').append(col);