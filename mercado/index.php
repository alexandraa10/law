<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Exceptions\MPApiException;

require 'vendor/autoload.php';

MercadoPagoConfig::setAccessToken("APP_USR-1017935996692173-020420-360143124452ffc33006d1b38015053e-2248585555");

$body = json_decode(file_get_contents("php://input"), true);
$items = $body["items"] ?? null;

if (empty($items)) {
    $items = [[
        "id" => "1",
        "title" => "Plan Basico",
        "quantity" => 1,
        "unit_price" => 100.00
    ]];
}

try {
    $client = new PreferenceClient();

    $preference = $client->create([
        "items" => $items,
        "statement_descriptor" => "Law Firm",
        "external_reference" => "C1"
    ]);

    echo json_encode(["url" => $preference->init_point]);

} catch (MPApiException $e) {
    echo json_encode([
        "error" => true,
        "mensaje" => $e->getMessage(),
        "status_code" => $e->getApiResponse()->getStatusCode(),
        "detalle" => $e->getApiResponse()->getContent()
    ]);
} catch (Exception $e) {
    echo json_encode([
        "error" => true,
        "mensaje" => $e->getMessage()
    ]);
}
