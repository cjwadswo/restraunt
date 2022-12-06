//Create button listeners for tabs
export function loadHtml(tab) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  if (tab == "home") {
    content.innerHTML = `<div class="box">
      <h2>Welcome to the restraunt!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quidem
        soluta error tempore doloremque. Facilis molestias numquam mollitia
        quasi omnis laborum quia rerum consequuntur tenetur voluptate
        repellendus quisquam itaque ex, molestiae ducimus enim iure dolorem?
        Harum minus illum quis dolorem delectus debitis fugit, magni placeat
        omnis animi consequatur veniam aperiam, quod laborum. Nihil enim
        fugiat officia adipisci quam sed magni unde laborum quod assumenda
        expedita exercitationem dignissimos, minus deserunt nisi? Iusto,
        repellat. Rerum praesentium porro at amet veniam neque vitae labore
        enim vero, similique minima alias repellat repellendus facilis dolor
        reiciendis, laborum iusto voluptate. Excepturi tenetur officiis id
        ducimus dolor.
      </p>
    </div>`;
  } else if (tab == "about") {
    content.innerHTML = `<h1 class="founded">Founded in 1989</h1>
      <div class="values-card">
        <h2>Our values</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quae, illum
          maiores saepe quasi itaque earum, facere hic a reiciendis nam sequi quaerat
          excepturi. Optio, fugiat. Maiores architecto blanditiis consequuntur?
        </p>
      </div>
      
      <div class="values-card">
        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde nihil
          dolorem harum, officiis nesciunt reprehenderit aut dolore, blanditiis,
          libero impedit doloribus optio quod. Nulla perspiciatis cupiditate quibusdam
          voluptatem laboriosam?
        </p>
      </div>`;
  } else if (tab == "contact") {
    content.innerHTML = `<div class="contact-card">
      <h1>Contact Us!</h1>
      <li>
        <ul>
          Phone: (111)-111-1111
        </ul>
        <ul>
          Address: 1111 Fake St
          <br>Fake City, NY 10001</br>
        </ul>
        <ul>email: fakeemail@fake.com</ul>
      </li>
    </div>`;
  }
}
