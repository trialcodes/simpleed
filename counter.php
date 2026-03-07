<?php

$file = "counter.txt";

$count = file_get_contents($file);

$count = $count + 1;

file_put_contents($file,$count);

echo $count;

?>