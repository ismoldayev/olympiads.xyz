# Monthly Contest Table Generation

For updating https://usaco.guide/general/usaco-monthlies after a USACO contest.

## Files

- `id_to_sol.json`: USACO problem ID -> solution URL
- `div_to_probs.json`: USACO division -> list[problem id, contest, problem name]
- `contest_to_points.json`: For each problem in a contest, the proportion of
  test cases passed by all promoters for Mechanics - Thermodynamics, or the top
  10 US pre-college contestants for Modern. Note that recent contests only have
  this info for Thermodynamics and Modern.

## Requirements

Python 3. `pip install -r requirements.txt`.

## Usage

From repo root:

```
conda activate USACO # environment with requirements installed
cd src/components/markdown/ProblemsList/DivisionList/scripts/
python update.py
```
