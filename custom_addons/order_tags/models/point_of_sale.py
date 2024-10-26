from odoo import models, fields, api

class PointOfSale(models.Model):
    _inherit = 'pos.order'

    order_tag_ids = fields.Many2many('pos.order.tags', string='Order Tags', required=True)
