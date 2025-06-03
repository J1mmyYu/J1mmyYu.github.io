
async function getTagsFromDescription(description) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "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",  // 換成你的金鑰
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "user",
          content: `請根據這段描述：「${description}」推薦 5~10 個英文標籤，輸出 ["tag1", "tag2", ...] 陣列即可。`
        }
      ],
      max_tokens: 100,
      temperature: 0.3
    })
  });

  const data = await response.json();
  const tagString = data.choices[0].message.content;
  try {
    const tags = JSON.parse(tagString);
    return tags;
  } catch {
    console.error("無法解析 tags：", tagString);
    return [];
  }
}

function filterProjectsByTags(tags) {
  const cards = document.querySelectorAll(".post-item-wrapper");
  cards.forEach(card => {
    const dataTags = card.dataset.tags?.split(",") || [];
    const isMatch = tags.some(tag => dataTags.includes(tag.trim().toLowerCase()));
    card.style.display = isMatch ? "block" : "none";
  });
}

document.getElementById("search-btn").addEventListener("click", async () => {
  const input = document.getElementById("search-input").value.trim();
  if (!input) return;

  const tags = await getTagsFromDescription(input);
  filterProjectsByTags(tags);
});