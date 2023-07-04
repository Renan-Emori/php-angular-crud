<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('products', ProductController::class);
/*
Verb          URI                        Action         Route Name
GET           /products                  index          products.index
POST          /products                  store          products.store
GET           /products/{product}        show           products.show
PUT/PATCH     /products/{product}        update         products.update
DELETE        /products/{product}        destroy        products.destroy

GET           /products/{product}/edit   edit           products.edit --->não usado
GET           /products/create           create         products.create ---->não usado
 */