# bamazon
Bamazon is a CLI App using MySQL database to store a set product inventory which is updated by the user.

The application first displays the list of all products available by completing a MySQL read request.

The application then uses npm's inquirer to ask the user for a product ID and a quantity. 

The application then queries the database to see if there is enough product in stock to complete the transaction. 

If there is enough of the product to complete the sale, the application responds with transaction successful and persists the new quantity in the database.

If there is not enough of the product to complete the transaction, the application will respond "not enough in stock."

