---
layout: page
title: 두 소설의 단어 빈도 비교(고딕 소설)
permalink: /gothic/
---

<h2>Frankenstein vs. Dracula</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;"><h3>A Study in Scarlet</h3>
        <div style="height: 500px;"><canvas id="chart-frankenstein"></canvas></div>
    </div>
    <div style="flex: 1;"><h3>The Hound of the Baskervilles</h3>
        <div style="height: 500px;"><canvas id="chart-dracula"></canvas></div>
    </div>
</div>

<!-- 순서 중요 -->
{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script>