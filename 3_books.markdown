---
layout: page
title: Books
permalink: /books/
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/js/jquery.tablesorter.min.js"></script>
<script>
  $(document).ready(function() {
    $("#book-table").tablesorter({
      headers: { 2: { sorter: 'digit' } } // Sort based on the Rating column
    });
  });
</script>

<!-- <p style="text-align: center; font-size: 20px; color: grey;"><i>Website migration in progress...</i></p> -->

Here it's my readings over the last years.
The rating reflects my personal favorites.
Who knows, you may find here **a book that will change your mind!**

I am always hunting for great books (any topic!).
So, don't hesitate to **recommend me your favorites!**

P.S.: Currently I am taking a break from reading. 
As Tim Ferriss said, "being busy is a form of laziness".
I felt like too much reading kept my brain busy, and thus I had little time to think.

# 2024
{% include table.html csv_file="2024_readings" %}

# 2023
{% include table.html csv_file="2023_readings" %}

# 2022
{% include table.html csv_file="2022_readings" %}

# 2021
{% include table.html csv_file="2021_readings" %}