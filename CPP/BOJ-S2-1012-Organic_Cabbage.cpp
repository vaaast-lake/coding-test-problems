#include <bits/stdc++.h>
using namespace std;

int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int m, n, k, y, x, ret, ny, nx, t;
int a[51][51];
bool visited[51][51];
void dfs(int y, int x)
{
  visited[y][x] = 1;
  for (int i = 0; i < 4; i++)
  {
    ny = y + dy[i];
    nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m)
      continue;
    if (a[ny][nx] == 1 && !visited[ny][nx])
    {
      dfs(ny, nx);
    }
  }
  return;
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);

  cin >> t;
  while (t--)
  {
    // 다음 케이스 배추밭 초기화
    fill(&a[0][0], &a[0][0] + 51 * 51, 0);
    fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);

    ret = 0;
    cin >> m >> n >> k;

    // 필드에 배추 심기
    for (int i = 0; i < k; i++)
    {
      cin >> x >> y;
      a[y][x] = 1;
    }

    // 배추벌레가 있는 곳에서 dfs 탐색
    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < m; j++)
      {
        if (a[i][j] == 1 && !visited[i][j])
        {
          dfs(i, j);
          ret++;
        }
      }
    }
    cout << ret << "\n";
  }

  return 0;
}