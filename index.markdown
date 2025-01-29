---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<!-- 
<style>
  .embeddable-buttondown-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: auto;
    background-color: #f9f9f9; /* Light gray background */
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  .embeddable-buttondown-form label {
    font-size: 0.8rem;
    font-weight: bold;
    color: #333; /* Darker text for readability */
    margin-bottom: 8px;
    text-align: center;
  }

  .embeddable-buttondown-form .form-group {
    display: flex;
    width: 100%;
    gap: 8px;
  }

  .embeddable-buttondown-form input[type="email"] {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.8rem;
  }

  .embeddable-buttondown-form input[type="submit"] {
    background-color: #007BFF; /* Primary blue color */
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .embeddable-buttondown-form input[type="submit"]:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  .embeddable-buttondown-form p {
    font-size: 0.75rem;
    margin-top: 10px;
    color: #666; /* Subtle gray for the text */
    text-align: center;
  }

  .embeddable-buttondown-form a {
    color: #007BFF;
    text-decoration: none;
  }

  .embeddable-buttondown-form a:hover {
    text-decoration: underline;
  }
</style> -->

<div class="profile-container">
  <div class="profile-image">
    <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Profile Picture" loading="lazy">
  </div>

  <div class="profile-content">
    <div class="text-block">
        <!-- <h1>Junliang WANG</h1> -->

        <p>Welcome to my personal space!</p>

        <p>
        I am an experimental scientist in quantum computing. But, above all, I consider myself as a <strong>curiosity-driven person experimenting with life.</strong>
        Combining this and my nerdy obsession of note-taking, I decided to create this blog to share my journey, including life hacks I discovered, books I devoured, philosophical reflections I pondered, and the beauty of nature I enjoyed.
        </p>
        </div>
      
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/angwng"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.com/angwng', 'popupwindow')"
      class="embeddable-buttondown-form"
    >
      <label for="bd-email">Subscribe to get notified about new posts!</label>
      <div class="form-group">
        <input type="email" name="email" id="bd-email" placeholder="Enter your email" required />
        <input type="submit" value="Subscribe" />
      </div>
    </form>

    <!-- <div class="profile-buttons">
      <a href="/blog" class="btn">Blog</a>
      <a href="/cv" class="btn">CV</a>
      <a href="/books" class="btn">Books</a>
    </div> -->

    </div>
  </div>
<br>

