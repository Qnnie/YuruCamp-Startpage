# YuruCamp-Startpage
<img src='images/preview.png'>

[Demo](https://qnnie.github.io/YuruCamp-Startpage/)

Search Tips
------------------------------
<ul>
<li>-y something > YouTube Search </li>
<li>-k something > Kissanime Search </li>
<li>-d something > duckduckgo Search </li>
<li>Tab Key > Enable search </li>
</ul>
          
How To Use as startpage
------------------------------
<ol>
          <li>Create github account</li>
          <li>Fork repository</li>
          <li>Go to the settings of your forked repo</li>
          <li>Enable github pages by setting 'source' to master</li>
          <li>Click on link provided to see your page</li>
          <li>Go to your browser settings and enter custom 'on startup' link</li>
</ol>    

Configure Links 
----------------------------
Open up index.html and look for this reoccuring pattern, card > links
```html
          <div class="card" id="Nadeshiko">
              <a href='https://www.youtube.com' target='_blank'><button class="dropdown-item" type="button">YouTube</button></a>
              <a href='https://reddit.com' target='_blank'><button class="dropdown-item" type="button">Reddit</button></a>
              <a href='https://twitter.com' target='_blank'><button class="dropdown-item" type="button">Twitter</button></a>
              <a href='https://www.instagram.com' target='_blank'><button class="dropdown-item" type="button">Instagram</button></a>
```
Make the necessary changes and reopen the HTML file in a browser.
<br>
Feel free to look around and mess around with whats there, it's not done yet, its about 50% complete Enjoy~

