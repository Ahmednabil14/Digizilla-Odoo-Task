from odoo import http
from odoo.http import request
import json

class TagApi(http.Controller):
    @http.route("/tag", methods=["POST"], type="http", auth="none", csrf=False)
    def post_tag(self):
        args = request.httprequest.data.decode()
        vals = json.loads(args)
        tag_id = request.env['pos.order.tags'].create(vals)
        return request.make_json_response({
            "message": "tag added successfully",
            "data": {
                "tag": tag_id.tag,
                "color": tag_id.color
            }
        }, status=201)