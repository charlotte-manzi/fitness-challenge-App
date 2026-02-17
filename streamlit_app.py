import streamlit as st
import streamlit.components.v1 as components
import os

st.set_page_config(
    page_title="Fitness Challenge — Keza & Naomie",
    page_icon="💪",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Masquer les éléments Streamlit par défaut (header, footer, menu)
st.markdown("""
    <style>
        #MainMenu { visibility: hidden; }
        header { visibility: hidden; }
        footer { visibility: hidden; }
        .block-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
        }
        [data-testid="stAppViewContainer"] {
            padding: 0 !important;
        }
        [data-testid="stVerticalBlock"] {
            gap: 0 !important;
            padding: 0 !important;
        }
    </style>
""", unsafe_allow_html=True)

# Lire le fichier HTML
html_file = os.path.join(os.path.dirname(__file__), "public", "index.html")

with open(html_file, "r", encoding="utf-8") as f:
    html_content = f.read()

# Intégrer le HTML en pleine page
components.html(
    html_content,
    height=900,
    scrolling=True
)