Categories = new Mongo.Collection("categories");


Products = new Mongo.Collection("products");

// Products image

ProductsImages = new FS.Collection("ProductsImages", {

    stores: [new FS.Store.GridFS("ProductsImages")]
});