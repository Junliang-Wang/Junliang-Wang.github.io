---
layout: page
title: Books
permalink: /books/
show_in_header: true
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.3/js/jquery.tablesorter.min.js"></script>
<script>
  $(document).ready(function() {
    $("#book-table").tablesorter({
      textExtraction: function(node) {
        // If the cell has a data-value (like Rating), use it; else use text
        var v = $(node).attr("data-value");
        return v !== undefined ? v : $(node).text();
      },
      headers: { 2: { sorter: 'digit' } } // Rating column (0-based)
    });
  });
</script>

Here it's my readings over the last years.
The rating reflects my personal favorites.
Who knows, you may find here **a book that will change your mind!**

I am always hunting for great books (any topic!).
So, don't hesitate to **recommend me your favorites!**

Note that:
- Some books appear multiple times because I re-read favorites (their ratings may vary over time)
- **Ratings** are *highly* subjective; don’t treat them as absolute.

<span class="star">★★★</span>: Amazing book, mindblowing, all-time favorite.

<span class="star">★★</span><span class="star empty">☆</span>: Highly recommendable, a nice read, I enjoyed a lot.

<span class="star">★</span><span class="star empty">☆☆</span>: Neutral, but still recommendable.

<span class="star empty">☆☆☆</span>: I got bored, I didn't enjoyed.

# 2025
{% include table.html csv_file="2025_readings" %}

# 2024
{% include table.html csv_file="2024_readings" %}

# 2023
{% include table.html csv_file="2023_readings" %}

# 2022
{% include table.html csv_file="2022_readings" %}

# 2021
{% include table.html csv_file="2021_readings" %}