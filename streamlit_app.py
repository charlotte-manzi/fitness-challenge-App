import streamlit as st
import streamlit.components.v1 as components
import os

st.set_page_config(
    page_title="Fitness Challenge",
    page_icon="💪",
    layout="wide",
    initial_sidebar_state="collapsed"
)

st.markdown("""
    <style>
        #MainMenu { visibility: hidden; }
        header { visibility: hidden; }
        footer { visibility: hidden; }
        .block-container { padding: 0 !important; max-width: 100% !important; }
    </style>
""", unsafe_allow_html=True)

html_file = os.path.join(os.path.dirname(__file__), "public", "index.html")

with open(html_file, "r", encoding="utf-8") as f:
    html_content = f.read()

components.html(html_content, height=900, scrolling=True)