import os
import sys
import subprocess
from datetime import date

title = input("Enter Story Title: ")


def create_story():
    story_type = input('Choose Story Type\n1. Blog Post\n2. Module Post\nEnter 1 or 2: ')
    if story_type in ['1', '2']:
        pageType = 'blogPosts' if story_type == '1' else 'modulePosts'
        title_w_dash = '-'.join(title.split(' '))
        now = date.today().strftime("%Y-%m-%d")
        folder = f"src/pages/{pageType}/{now}-{title_w_dash}"
        os.mkdir(folder)
        print(f"Created directory {folder}")

        document_name = f"{folder}/index.md"
        document = open(document_name, "w+")
        print(f"Added {document_name}")

        # write to document
        document.write(f"""---
title: {title}
date: '{now}'
spoiler: 
---
""")
    else:
        print('\nInvalid Story Type 😓  (You can only choose 1 or 2)\n')
        create_story()

create_story()
