{
    "name": "Order Tags",
    "summary": "Add order tags",
    "description": """
    """,
    "author": "ahmed nabil ali",
    "category": "Point Of Sale",
    "version": "16.0.0.1.0",
    "depends": ["base", "point_of_sale"],
    "application": True,
    "data": [
        "views/pos_order_tags_view.xml",
        "security/ir.model.access.csv"
    ],
    "assets": {
            "point_of_sale.assets": [
                "order_tags/static/src/js/pos_tag_button.js",
                "order_tags/static/src/js/tag_selection_popup.js",
                "order_tags/static/src/xml/pos_tag_button.xml",
                "order_tags/static/src/xml/tag_selection_popup.xml",
            ],
        },
}

