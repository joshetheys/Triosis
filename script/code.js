const products = [
    {
      title: "Product",
      imgURL: "https://picsum.photos/200/300?random=1",
      description: "Lorem ipsum",
      price: "R200",
    },
    {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=2",
        description: "Lorem ipsum",
        price: "R200",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=3",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=4",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=5",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=6",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=7",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=8",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=9",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
      {
        title: "Product",
        imgURL: "https://picsum.photos/200/300?random=10",
        description: "Lorem ipsum",
        price: "HTML/CSS/JS",
      },
  ];
  console.log(products)
  console.log(products[3].title)
  
   const productContainer = document.getElementById("products");
  products.forEach((product) => {
    productContainer.innerHTML += `
      <h3>${product.title}</h3>
      <img src=${product.imgURL} />
    `;
  });
  $(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});