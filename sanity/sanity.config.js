import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { deskTool } from 'sanity/desk';
import { TbSettings, TbShoppingBag, TbTag } from 'react-icons/tb';
import { FaRegWindowMaximize } from 'react-icons/fa';

export default defineConfig({
  name: 'default',
  title: 'Evergreen',

  projectId: 'bn5hg3yh',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .icon(FaRegWindowMaximize)
              .child(() =>
                S.documentTypeList('page').title('Pages').menuItems(S.documentTypeList('page').getMenuItems())
              ),
            S.listItem()
              .title('Products')
              .icon(TbShoppingBag)
              .child(() =>
                S.documentTypeList('product').title('Products').menuItems(S.documentTypeList('product').getMenuItems())
              ),
            S.listItem()
              .title('Product Tags')
              .icon(TbTag)
              .child(() =>
                S.documentTypeList('productTag')
                  .title('Product Tags')
                  .menuItems(S.documentTypeList('productTag').getMenuItems())
              ),
            S.divider(),
            // Settings
            S.listItem()
              .title('Settings')
              .child(S.document().schemaType('settings').documentId('settings'))
              .icon(TbSettings),
          ]),
    }),
    visionTool(),
  ],
});
