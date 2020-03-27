import os
import sys
import subprocess
from datetime import date

title = input("Enter Story Title: ")


def create_story():
    story_type = input(
        'Choose Story Type\n1. Blog Post\n2. Module Post\n3. Note Post\nEnter 1, 2 or 3: ')
    post_map = {
        '1': 'blog',
        '2': 'modules',
        '3': 'notes'
    }
    if story_type in post_map:
        page_type = post_map[story_type]
        title_w_dash = '-'.join(title.split(' '))
        now = date.today().strftime("%Y-%m-%d")
        module_code = ''
        folder = ''
        document_title = ''

        if page_type == 'modules':
            module_code = input('Enter Module Code: ')
            folder = f"src/pages/{page_type}/{module_code}-{title_w_dash}"
            document_title = f"{module_code} {title}"
        else:
            if page_type == 'notes':
                folder = f"src/pages/{page_type}/{title_w_dash}"
            else:
                folder = f"src/pages/{page_type}/{now}-{title_w_dash}"
            document_title = title

        os.mkdir(folder)
        print(f"Created directory {folder}")

        document_name = f"{folder}/index.md"
        document = open(document_name, "w+")

        spoiler = input('Enter Spoiler: ')
        print(f"Added {document_name}")
        document.write(f"""---
title: {document_title}
date: '{now}'
spoiler: {spoiler}
---
""")
    else:
        print('\nInvalid Story Type 😓  (You can only choose 1, 2 or 3)\n')
        create_story()


create_story()
