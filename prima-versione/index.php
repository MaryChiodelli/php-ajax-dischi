<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP dischi</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <?php
  include __DIR__ . '/../db/dischi.php';
  ?>

  <header>
    <img class="header-logo" src="../logo.png" alt="Spotify logo">
  </header>

  <main>
    <div class="container">
      <div class="row">

        <?php
        foreach($dischi as $disco) {
        ?>
        <div class="col">
          <div class="card">
            <img class="card-img" src="<?= $disco['poster'] ?>" alt="<?= $disco['title'] ?>">
            <h3 class="card-title">
              <?= $disco['title'] ?>
            </h3>
            <div class="card-author">
              <?= $disco['author'] ?>
            </div>
            <div class="card-year">
              <?= $disco['year'] ?>
            </div>
          </div><!--/card -->
        </div><!--/col -->
        <?php
        }
        ?>
        
      </div><!--/row -->
    </div><!--/container -->
  </main>

</body>
</html>