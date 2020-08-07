import os
import sys
import subprocess
from datetime import date

title = input("Enter Title: ")


def create_story():
    story_type = input(
        'Choose Type\n1. Blog Post\n2. Design Post\nEnter 1 or 2: ')

    post_map = {
        '1': 'blog',
        '2': 'designs',
        # '3': 'modules',
        # '4': 'notes'
    }
    if story_type in post_map:
        page_type = post_map[story_type]
        title_w_dash = '-'.join(title.lower().split(' '))
        now = date.today().strftime("%Y-%m-%d")
        folder = ''
        document_title = ''

        if page_type == 'blog':
            folder = f"src/pages/{page_type}/{now}-{title_w_dash}"
            document_title = title
        elif page_type == 'designs':
            folder = f"src/pages/{page_type}/{title_w_dash}"
            document_title = title
        # elif page_type == 'modules':
        #     module_code = input('Enter Module Code: ')
        #     folder = f"src/pages/{page_type}/{module_code}-{title_w_dash}"
        #     document_title = f"{module_code} {title}"
        # elif page_type == 'notes':
        #     folder = f"src/pages/{page_type}/{title_w_dash}"
        #     document_title = title

        os.mkdir(folder)
        print(f"Created directory {folder}")

        document_name = f"{folder}/index.md"
        document = open(document_name, "w+")

        if page_type == 'blog':
            spoiler = input('Enter Spoiler: ')
            print(f"Added {document_name}")
            document.write(f"""---
    title: {document_title}
    date: '{now}'
    spoiler: {spoiler}
    ---
""")
        elif page_type == 'designs':
            print(f"Added {document_name}")
            document.write(f"""---
title: {document_title}
date: '{now}'
image: 
---
""")     

    else:
        print('\nInvalid Story Type 😓  (You can only choose 1, 2 or 3)\n')
        create_story()


create_story()
