<?php

class Product
{
    var $name;
    var $description;
    var $price;

    function __construct($name, $description, $price)
    {
        $this->name         = $name;
        $this->description  = $description;
        $this->price        = $price;
    }

    function get()
    {
        return "{$this->name},
                {$this->description},
                {$this->price} <hr>";
    }

    function __destruct()
    {
        echo 'Entrei no destrutor... hehehe';
    }
}

$product1 = new Product('TV', 'Amoled', '4.999');
echo $product1->get();

$product2 = new Product('Geladeira', 'Super Gelada', '2.999');
echo $product2->get();

