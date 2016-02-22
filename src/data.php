<?php

$some_var_name = 'asdsad';

function fn_name( $var ) {
	return 2 == $var;
}

$data = [];

$map = array_map( function ( $item ) {
	return $item;
}, $data );
