<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //all products
        $products = Product::all();

        return response()->json([
            'products' => $products
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $products = $request->all();
        $newProduct = Product::create($products);
        return response()->json([
            'message' => 'Produto criado com sucesso',
            'data' => $newProduct
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);
        if(!$product){
            return response()->json([
                'message'=>'Produto não encontrado'
            ], 404);
        }

        return response()->json([
            'product' => $product
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $products = $request->all();
        $product = Product::find($id);
        $product-> update($products);
        return response()->json([
            'message' => 'Produto atualizado com sucesso'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if($product){
            $product->delete();
            return response()->json(['message' => 'Produto excluido com sucesso']);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
