# Checklist before raising a PR 🚀 

## Action performed

Choose the action you performed and review the corresponding checklist items.

**How-to guide:** 

Add an `x` inside the square brackets by removing the space to mark an item as `checked`

- [ ] Unchecked
- [x] Checked

<hr />

- [ ] **Edit an existing content (MDX) page**

<details>
<summary>Checklist ✅ </summary>

<br/>

- [ ] Review changes using the <a href="https://github.com/SetuHQ/vscode-docter-preview#mdx-preview" target="_blank">MDX preview</a> option
- [ ] If the length of content >15000 chars, use the <a href="https://docs.setu.co/content-preview" target="_blank">Content preview portal</a> to view changes
- [ ] If a redirect is needed to the existing page, add a key, value pair in `redirects.json`

</details>

<hr />

- [ ] **Edit an existing API reference page**  :

<details>
<summary>Checklist ✅</summary>

<br/>

- [ ] Use the <a href="https://docs.setu.co/content-preview" target="_blank">Content preview portal</a> to view changes
- [ ] API reference is in JSON format (OpenAPI or Swagger)

</details>

<hr />

- [ ] **Add a new content (MDX) page**

<details>
<summary>Checklist ✅</summary>

<br/>

- [ ] Create a `.mdx` file with the path as its name in the content folder
- [ ] Add frontmatter with all the metadata
- [ ] Review the order of items in Sidebar using the <a href="https://github.com/SetuHQ/vscode-docter-preview#sidebar-preview" target="_blank">Sidebar preview</a> option
- [ ] Review changes using the <a href="https://github.com/SetuHQ/vscode-docter-preview#mdx-preview" target="_blank">MDX preview</a> option
- [ ] If the length of content >15000 chars, use the <a href="https://docs.setu.co/content-preview" target="_blank">Content preview portal</a> to view changes
- [ ] Created a folder with the same name, if any children were to be added to the page
- [ ] Once all changes are done, update the menu items by using the <a href="https://github.com/SetuHQ/vscode-docter-preview#menu-items" target="_blank">Menu Items</a> option
- [ ] Add a key, value pair in `redirects.json` if you wish to have a redirect to the new page



</details>

<hr />

- [ ] **Add a new API reference page**

<details>
<summary>Checklist ✅</summary>

<br/>

- [ ] Create a `.json` file with the product path as its name
- [ ] Create an `api-reference.mdx`  file in the respective product folder inside content folder
- [ ] Add frontmatter with all the metadata 
- [ ] Review the order of items in Sidebar using the <a href="https://github.com/SetuHQ/vscode-docter-preview#sidebar-preview" target="_blank">Sidebar preview</a> option
- [ ] Add API reference in JSON format (OpenAPI or Swagger) into created `.json` file.
- [ ] Used the <a href="https://docs.setu.co/content-preview" target="_blank">Content preview portal</a> to view changes
- [ ] Once all changes are done, update the menu items by using the <a href="https://github.com/SetuHQ/vscode-docter-preview#menu-items" target="_blank">Menu Items</a> option

</details>
