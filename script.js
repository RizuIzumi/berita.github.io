function openArticle(id) {
    document.querySelectorAll('.article-detail').forEach(function(article) {
        article.style.display = 'none';
    });
    document.querySelectorAll('.columns').forEach(function(column) {
        column.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function closeArticle() {
    document.querySelectorAll('.article-detail').forEach(function(article) {
        article.style.display = 'none';
    });
    document.querySelectorAll('.columns').forEach(function(column) {
        column.style.display = 'flex';
    });
}