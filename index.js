/* adding a new item */

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const shoppingItem = $('#shopping-list-entry').val();
    console.log(shoppingItem);
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${shoppingItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`); 
});

/* checking off an item */

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
});

/* 

Initial Guess: 

$('.shopping-item-toggle').on('click', function(event) {
    $(event.currentTarget).parent().siblings('.shopping-item').addClass('shopping-item__checked');
}); */

/* deleting an item */

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).parent().parent().remove();
} );

/* or the following, however this will not work for items that are added after the page has loaded */

/* 
$('.shopping-item-delete').on('click', function(event){
    $(event.currentTarget).parent().parent().remove();
})
*/ 