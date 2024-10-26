odoo.define('order_tags.TagsButton', function(require) {
    'use strict';
    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require("@web/core/utils/hooks");
    const { Gui } = require('point_of_sale.Gui');

    class TagsButton extends PosComponent {
        setup() {
            super.setup();
            useListener('click', this.clickTagsButton);
        }

        async clickTagsButton() {
            const tags = await this.rpc({
                model: 'pos.order.tags',
                method: 'search_read',
                args: [[], ['id', 'tag', 'color']]
            });

            const { confirmed, payload: selectedTags } = await Gui.showPopup('TagSelectionPopup', {
                title: this.env._t('Select Order Tags'),
                tags: tags,
                selectedTags: this.env.pos.get_order().order_tag_ids || []
            });

            if (confirmed) {
                const currentOrder = this.env.pos.get_order();
                currentOrder.order_tag_ids = selectedTags;

                await this.rpc({
                    model: 'pos.order',
                    method: 'write',
                    args: [[currentOrder.id], { order_tag_ids: selectedTags }]
                });
            }
}
    }

    TagsButton.template = 'TagsButton';
    ProductScreen.addControlButton({
        component: TagsButton,
        position: ["before", "OrderlineCustomerNoteButton"]
    });

    Registries.Component.add(TagsButton);
    return TagsButton;
});